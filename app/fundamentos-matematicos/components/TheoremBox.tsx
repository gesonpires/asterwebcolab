'use client';

import { ReactNode } from 'react';
import MathDisplay from './MathDisplay';

interface TheoremBoxProps {
  title: string;
  children: ReactNode;
  proof?: ReactNode;
  className?: string;
}

export default function TheoremBox({ 
  title, 
  children, 
  proof,
  className = ''
}: TheoremBoxProps) {
  return (
    <div className={`my-6 p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-500 dark:border-blue-400 ${className}`}>
      <div className="flex items-center mb-4">
        <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">Teorema</span>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>

      {proof && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-2">
            <span className="text-green-500 dark:text-green-400 font-bold mr-2">Demonstração</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            {proof}
          </div>
        </div>
      )}
    </div>
  );
}
