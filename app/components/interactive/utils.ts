import { Node, Edge } from 'reactflow';
import { Concept, NodeData, EdgeData } from './types';
import { nodeTypes, edgeTypes } from './ReactFlowConfig';

export const generateNodes = (concepts: Concept[]): Node[] => {
  return concepts.map((concept, index) => ({
    id: concept.id,
    type: nodeTypes.concept,
    position: { x: index * 200, y: index * 100 },
    data: {
      concept,
      isSelected: false,
    } as NodeData,
  }));
};

export const generateEdges = (concepts: Concept[]): Edge[] => {
  const edges: Edge[] = [];

  concepts.forEach((concept) => {
    concept.relatedConcepts.forEach((relatedId) => {
      edges.push({
        id: `${concept.id}-${relatedId}`,
        source: concept.id,
        target: relatedId,
        type: edgeTypes.related,
        data: {
          type: 'related',
          isSelected: false,
        } as EdgeData,
      });
    });
  });

  return edges;
};

export const calculateScore = (
  concepts: Concept[],
  answer: string
): number => {
  const foundConcepts = concepts.filter((concept) =>
    concept.keywords.some((keyword) =>
      answer.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return Math.round((foundConcepts.length / concepts.length) * 100);
};

export const findRelatedConcepts = (
  concepts: Concept[],
  foundConcepts: string[]
): string[] => {
  return concepts
    .filter((concept) => foundConcepts.includes(concept.name))
    .flatMap((concept) => concept.relatedConcepts);
};

export const generateSuggestions = (
  concepts: Concept[],
  foundConcepts: string[]
): string[] => {
  return concepts
    .filter((concept) => !foundConcepts.includes(concept.name))
    .map((concept) => `Considere mencionar o conceito de ${concept.name}`);
};

export const updateSimulationState = (
  currentState: any,
  deltaTime: number
): any => {
  const newVelocity = {
    x: currentState.velocity.x + currentState.acceleration.x * deltaTime,
    y: currentState.velocity.y + currentState.acceleration.y * deltaTime,
  };

  const newPosition = {
    x: currentState.position.x + newVelocity.x * deltaTime,
    y: currentState.position.y + newVelocity.y * deltaTime,
  };

  return {
    position: newPosition,
    velocity: newVelocity,
    acceleration: currentState.acceleration,
    time: currentState.time + deltaTime,
  };
};

export const calculateTrajectory = (
  initialState: any,
  deltaTime: number,
  duration: number
): Array<{ x: number; y: number }> => {
  const trajectory = [];
  let currentState = { ...initialState };

  for (let t = 0; t <= duration; t += deltaTime) {
    trajectory.push({ ...currentState.position });
    currentState = updateSimulationState(currentState, deltaTime);
  }

  return trajectory;
}; 