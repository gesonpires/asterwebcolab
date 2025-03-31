import Skeleton from '../ui/Skeleton';

export default function TrailCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <Skeleton variant="text" className="w-3/4 h-6" />
        <Skeleton variant="text" className="w-full h-16" />
        
        <div className="flex items-center justify-between">
          <Skeleton variant="text" className="w-24" />
          <Skeleton variant="rectangular" className="w-28 h-6 rounded-full" />
        </div>
        
        <div className="space-y-2">
          <Skeleton variant="text" className="w-20" />
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} variant="text" className="w-2/3" />
            ))}
          </div>
        </div>
        
        <Skeleton 
          variant="rectangular" 
          className="w-full h-10 mt-6 rounded-md" 
        />
      </div>
    </div>
  );
} 