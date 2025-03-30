import React from 'react';

interface ProofBlockProps {
  children: React.ReactNode;
}

export const ProofBlock: React.FC<ProofBlockProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
      <div className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Demonstração:</div>
      <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{children}</div>
    </div>
  );
};
