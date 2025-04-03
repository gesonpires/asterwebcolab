'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Panel,
  useReactFlow,
  ReactFlowProvider,
  NodeProps,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Concept } from './types';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import useDeepCompareEffect from 'use-deep-compare-effect';

interface ConceptMapProps {
  concepts: Concept[];
  onNodeClick?: (concept: Concept) => void;
  onUpdateConcepts?: (concepts: Concept[]) => void;
}

// Componente personalizado para os nós
function CustomNode({ data, id }: NodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600">
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <div className="flex items-center">
        <div className="flex-1 text-gray-900 dark:text-white">{data.label}</div>
        <div className="ml-2 flex gap-1">
          <button
            onClick={e => {
              e.stopPropagation();
              data.onEdit(id);
            }}
            className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaEdit size={16} />
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              data.onDelete(id);
            }}
            className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

function ConceptMapContent({
  concepts,
  onNodeClick,
  onUpdateConcepts,
}: ConceptMapProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingNode, setEditingNode] = useState<Node | null>(null);
  const [editingText, setEditingText] = useState('');
  const { project } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleEditNode = useCallback(
    (nodeId: string) => {
      const node = nodes.find(n => n.id === nodeId);
      if (node) {
        setEditingNode(node);
        setEditingText(node.data.label);
        setIsEditing(true);
      }
    },
    [nodes]
  );

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      setNodes(nds => nds.filter(node => node.id !== nodeId));
      setEdges(eds =>
        eds.filter(edge => edge.source !== nodeId && edge.target !== nodeId)
      );

      if (onUpdateConcepts) {
        onUpdateConcepts(concepts.filter(concept => concept.id !== nodeId));
      }
    },
    [concepts, onUpdateConcepts]
  );

  // Criar nós a partir dos conceitos
  useDeepCompareEffect(() => {
    const initialNodes: Node[] = concepts.map((concept, index) => ({
      id: concept.id,
      type: 'custom',
      position: {
        x: Math.cos(index * ((2 * Math.PI) / concepts.length)) * 200,
        y: Math.sin(index * ((2 * Math.PI) / concepts.length)) * 200,
      },
      data: {
        label: concept.name,
        concept: concept,
        onEdit: handleEditNode,
        onDelete: handleDeleteNode,
      },
    }));

    // Criar arestas a partir das relações entre conceitos
    const initialEdges: Edge[] = concepts.flatMap(concept =>
      concept.relatedConcepts.map(relatedId => ({
        id: `${concept.id}-${relatedId}`,
        source: concept.id,
        target: relatedId,
      }))
    );

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [concepts]);

  // Adicione este useEffect para garantir que os nós estejam sempre sincronizados com os conceitos
  React.useEffect(() => {
    // Atualizar apenas os dados dos nós sem recriar completamente
    setNodes(currentNodes =>
      currentNodes.map(node => {
        const updatedConcept = concepts.find(c => c.id === node.id);
        if (updatedConcept) {
          return {
            ...node,
            data: {
              ...node.data,
              label: updatedConcept.name,
              concept: updatedConcept,
              onEdit: handleEditNode,
              onDelete: handleDeleteNode,
            },
          };
        }
        return node;
      })
    );
  }, [concepts, handleEditNode, handleDeleteNode]);

  const handleSaveEdit = useCallback(() => {
    if (editingNode && onUpdateConcepts) {
      // Criar uma cópia atualizada dos conceitos primeiro
      const updatedConcepts = concepts.map(concept => {
        if (concept.id === editingNode.id) {
          return {
            ...concept,
            name: editingText,
          };
        }
        return concept;
      });

      // Atualizar o nó local
      setNodes(nds =>
        nds.map(node => {
          if (node.id === editingNode.id) {
            return {
              ...node,
              data: {
                ...node.data,
                label: editingText,
                concept: updatedConcepts.find(c => c.id === editingNode.id),
                onEdit: handleEditNode,
                onDelete: handleDeleteNode,
              },
            };
          }
          return node;
        })
      );

      // Notificar o componente pai sobre a mudança
      onUpdateConcepts(updatedConcepts);
    }
    setIsEditing(false);
    setEditingNode(null);
    setEditingText('');
  }, [
    editingNode,
    editingText,
    concepts,
    onUpdateConcepts,
    handleEditNode,
    handleDeleteNode,
  ]);

  const handleAddNode = useCallback(() => {
    const position = project({ x: 0, y: 0 });
    const newId = `novo-conceito-${Date.now()}`;
    const newConcept = {
      id: newId,
      name: 'Novo Conceito',
      description: 'Descrição do novo conceito',
      keywords: [],
      relatedConcepts: [],
      importance: '0.5',
      category: 'Física Clássica',
    };

    const newNode: Node = {
      id: newId,
      type: 'custom',
      position,
      data: {
        label: 'Novo Conceito',
        concept: newConcept,
        onEdit: handleEditNode,
        onDelete: handleDeleteNode,
      },
    };

    setNodes(nds => [...nds, newNode]);

    if (onUpdateConcepts) {
      onUpdateConcepts([...concepts, newConcept]);
    }

    // Iniciar edição do novo nó
    setEditingNode(newNode);
    setEditingText('Novo Conceito');
    setIsEditing(true);
  }, [project, concepts, onUpdateConcepts, handleEditNode, handleDeleteNode]);

  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge = addEdge(params, edges);
      setEdges(newEdge);

      // Atualizar relatedConcepts nos conceitos
      if (onUpdateConcepts) {
        const sourceConcept = concepts.find(c => c.id === params.source);
        const targetConcept = concepts.find(c => c.id === params.target);

        if (sourceConcept && targetConcept) {
          const updatedConcepts = concepts.map(concept => {
            if (concept.id === sourceConcept.id) {
              return {
                ...concept,
                relatedConcepts: [...concept.relatedConcepts, targetConcept.id],
              };
            }
            return concept;
          });
          onUpdateConcepts(updatedConcepts);
        }
      }
    },
    [edges, concepts, onUpdateConcepts]
  );

  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      const concept = concepts.find(c => c.id === node.id);
      if (concept && onNodeClick) {
        onNodeClick(concept);
      }
    },
    [concepts, onNodeClick]
  );

  return (
    <div className="w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <Panel position="top-right" className="space-y-2">
          <button
            onClick={handleAddNode}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            title="Adicionar novo conceito"
          >
            <FaPlus />
          </button>
        </Panel>
      </ReactFlow>

      {isEditing && editingNode && (
        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            value={editingText}
            onChange={e => setEditingText(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-2 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSaveEdit}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Salvar
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditingNode(null);
                setEditingText('');
              }}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConceptMap(props: ConceptMapProps) {
  return (
    <ReactFlowProvider>
      <ConceptMapContent {...props} />
    </ReactFlowProvider>
  );
}
