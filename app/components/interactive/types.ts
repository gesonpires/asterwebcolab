export interface Concept {
  id: string;
  name: string;
  keywords: string[];
  relatedConcepts: string[];
  importance: string;
  description?: string;
  category?: string;
}

export interface SimulationState {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  acceleration: { x: number; y: number };
  time: number;
}

export interface SimulationData {
  mass: number;
  force: number;
  friction: number;
}

export interface AnalysisResult {
  conceptsFound: string[];
  conceptsMissing: string[];
  relatedConcepts: string[];
  suggestions: string[];
  score: number;
}

export interface PhysicsSimulationProps {
  state: SimulationState;
  trajectory: Array<{ x: number; y: number }>;
  width: number;
  height: number;
}

export interface DiscursiveAnswerProps {
  concepts: Concept[];
  onAnalysisComplete?: (analysis: AnalysisResult) => void;
}

export interface InteractivePhysicsLessonProps {
  currentStep: number;
  simulationData: SimulationData;
  onStepComplete: (step: number) => void;
  onSimulationUpdate: (data: SimulationState) => void;
  concepts: Concept[];
}

export interface ConceptMapProps {
  concepts: Concept[];
  onNodeClick?: (concept: Concept) => void;
}

export interface NodeData {
  concept: Concept;
  isSelected: boolean;
}

export interface EdgeData {
  type: string;
  isSelected: boolean;
} 