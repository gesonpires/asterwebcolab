'use client';

import { ReactNode } from 'react';
import MathDisplay from './MathDisplay';

interface ExampleBoxProps {
  title?: string;
  children: ReactNode;
  formula?: string;
  solution?: string;
  className?: string;
}

export default function ExampleBox({ 
  title,
  children, 
  formula,
  solution,
  className = ''
}: ExampleBoxProps) {
  return (
    <div className={`my-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 ${className}`}>
      <div className="flex items-center mb-2">
        <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">Exemplo</span>
        {title && (
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
        )}
      </div>
      
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>

      {formula && (
        <div className="mt-4">
          <MathDisplay formula={formula} />
        </div>
      )}

      {solution && (
        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">Solução</span>
          </div>
          <MathDisplay formula={solution} />
        </div>
      )}
    </div>
  );
}
