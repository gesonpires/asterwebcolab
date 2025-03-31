import Skeleton from '../ui/Skeleton';

export default function ModuleContentSkeleton() {
  return (
    <div className="prose dark:prose-invert max-w-none space-y-8">
      {/* Text paragraphs */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-5/6" />
          <Skeleton variant="text" className="w-4/6" />
        </div>
      ))}

      {/* Image placeholder */}
      <div className="my-8">
        <Skeleton className="w-full h-[400px] rounded-lg" />
        <Skeleton variant="text" className="w-1/2 mx-auto mt-2" />
      </div>

      {/* More text content */}
      {[1, 2].map((i) => (
        <div key={`text-${i}`} className="space-y-2">
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-3/4" />
        </div>
      ))}

      {/* Video placeholder */}
      <Skeleton className="w-full aspect-video rounded-lg" />
    </div>
  );
} 