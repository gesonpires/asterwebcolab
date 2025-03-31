'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathDisplayProps {
  formula: string;
  display?: boolean;
  label?: string;
  className?: string;
}

export default function MathDisplay({ 
  formula, 
  display = true, 
  label,
  className = ''
}: MathDisplayProps) {
  const html = katex.renderToString(formula, {
    displayMode: display,
    throwOnError: false,
  });

  return (
    <div 
      data-testid="math-display"
      className={`my-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center ${className}`}
    >
      {label && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {label}
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
