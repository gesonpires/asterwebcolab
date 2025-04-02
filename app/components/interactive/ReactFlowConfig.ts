import { Node, Edge } from 'reactflow';

export const nodeTypes = {
  concept: 'concept',
};

export const edgeTypes = {
  related: 'related',
};

export const defaultNodeStyle = {
  padding: 10,
  borderRadius: 8,
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
};

export const defaultEdgeStyle = {
  stroke: '#6b7280',
  strokeWidth: 2,
};

export const getNodeStyle = (isSelected: boolean) => ({
  ...defaultNodeStyle,
  border: isSelected ? '2px solid #3b82f6' : defaultNodeStyle.border,
  boxShadow: isSelected
    ? '0 0 0 2px rgba(59, 130, 246, 0.5)'
    : defaultNodeStyle.boxShadow,
});

export const getEdgeStyle = (isSelected: boolean) => ({
  ...defaultEdgeStyle,
  stroke: isSelected ? '#3b82f6' : defaultEdgeStyle.stroke,
  strokeWidth: isSelected ? 3 : defaultEdgeStyle.strokeWidth,
});

export const defaultViewport = {
  x: 0,
  y: 0,
  zoom: 1,
};

export const defaultOptions = {
  nodesDraggable: true,
  nodesConnectable: true,
  elementsSelectable: true,
  fitView: true,
  attributionPosition: 'bottom-left',
};

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB'
) => {
  // Implementar lógica de layout aqui
  // Por enquanto, retornar os elementos sem layout
  return { nodes, edges };
}; 