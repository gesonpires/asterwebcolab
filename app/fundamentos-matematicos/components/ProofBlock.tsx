'use client';

import { motion } from 'framer-motion';

interface ProofBlockProps {
  children: React.ReactNode;
}

export default function ProofBlock({ children }: ProofBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4"
    >
      <div className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Demonstração:
      </div>
      <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
        {children}
      </div>
    </motion.div>
  );
}
