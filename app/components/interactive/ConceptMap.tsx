'use client';

import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface Concept {
  id: string;
  name: string;
  description: string;
  relatedConcepts: string[];
  category: string;
}

interface ConceptMapProps {
  concepts: Concept[];
  onNodeClick?: (concept: Concept) => void;
}

export default function ConceptMap({ concepts, onNodeClick }: ConceptMapProps) {
  // Criar nós a partir dos conceitos
  const initialNodes: Node[] = concepts.map((concept, index) => ({
    id: concept.id,
    type: 'default',
    position: {
      x: Math.cos(index * (2 * Math.PI / concepts.length)) * 200,
      y: Math.sin(index * (2 * Math.PI / concepts.length)) * 200,
    },
    data: { label: concept.name },
  }));

  // Criar arestas a partir das relações entre conceitos
  const initialEdges: Edge[] = concepts.flatMap(concept =>
    concept.relatedConcepts.map(relatedId => ({
      id: `${concept.id}-${relatedId}`,
      source: concept.id,
      target: relatedId,
    }))
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      const concept = concepts.find((c) => c.id === node.id);
      if (concept && onNodeClick) {
        onNodeClick(concept);
      }
    },
    [concepts, onNodeClick]
  );

  return (
    <div className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
} 