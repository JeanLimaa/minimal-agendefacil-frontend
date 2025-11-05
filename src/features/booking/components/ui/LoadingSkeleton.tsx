import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
  containerClassName?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = "bg-neutral-200 rounded-lg p-4 h-32", 
  count = 3,
  containerClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
}) => {
  return (
    <div className={containerClassName}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className={className}></div>
        </div>
      ))}
    </div>
  );
};