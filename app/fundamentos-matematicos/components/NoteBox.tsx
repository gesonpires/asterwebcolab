'use client';

import { motion } from 'framer-motion';
import MathDisplay from './MathDisplay';

export interface NoteBoxProps {
  title: string;
  content: string;
  formula?: string;
}

export default function NoteBox({ title, content, formula }: NoteBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
      {formula && <MathDisplay math={formula} />}
    </motion.div>
  );
} 