'use client';

import { ReactNode } from 'react';
import MathDisplay from './MathDisplay';

interface NoteBoxProps {
  title?: string;
  children: ReactNode;
  formula?: string;
  type?: 'info' | 'warning' | 'tip';
  className?: string;
}

export default function NoteBox({ 
  title,
  children, 
  formula,
  type = 'info',
  className = ''
}: NoteBoxProps) {
  const colors = {
    info: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-500 dark:border-yellow-400',
      text: 'text-yellow-500 dark:text-yellow-400'
    },
    warning: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-500 dark:border-red-400',
      text: 'text-red-500 dark:text-red-400'
    },
    tip: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-500 dark:border-green-400',
      text: 'text-green-500 dark:text-green-400'
    }
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    tip: '💡'
  };

  const labels = {
    info: 'Nota',
    warning: 'Atenção',
    tip: 'Dica'
  };

  return (
    <div className={`my-4 p-4 ${colors[type].bg} rounded-lg border-l-4 ${colors[type].border} ${className}`}>
      <div className="flex items-center mb-2">
        <span className={`${colors[type].text} font-bold mr-2`}>
          {icons[type]} {labels[type]}
        </span>
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
    </div>
  );
} 