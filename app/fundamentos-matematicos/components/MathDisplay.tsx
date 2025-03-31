'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathDisplayProps {
  math: string;
  className?: string;
}

export default function MathDisplay({
  math,
  className = '',
}: MathDisplayProps) {
  try {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(math, {
            throwOnError: false,
            displayMode: true,
            strict: false,
            trust: true,
          }),
        }}
      />
    );
  } catch (error) {
    console.error('Error rendering math:', error);
    return <div className="text-red-500">Error rendering equation</div>;
  }
}
