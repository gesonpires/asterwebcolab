'use client';

import { ReactNode } from 'react';
import MathDisplay from './MathDisplay';

interface DefinitionBoxProps {
  term: string;
  children: ReactNode;
  formula?: string;
  className?: string;
}

export default function DefinitionBox({ 
  term, 
  children, 
  formula,
  className = ''
}: DefinitionBoxProps) {
  return (
    <div className={`my-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 ${className}`}>
      <div className="flex items-center mb-2">
        <span className="text-purple-500 dark:text-purple-400 font-bold mr-2">Definição</span>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{term}</h4>
      </div>
      
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>

      {formula && (
        <div className="mt-4">
          <MathDisplay formula={formula} />
        </div>
      )}
    </div>
  );
}
