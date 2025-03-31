export default function ProfileLoading() {
  return (
    <div data-testid="loading-container" className="container mx-auto px-4 py-8">
      <div data-testid="loading-grid" className="grid grid-cols-1 gap-8">
        {/* Skeleton para o UserProfile */}
        <div
          data-testid="user-profile-skeleton"
          className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 animate-pulse"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div
              data-testid="avatar-skeleton"
              className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full"
            />
            <div className="flex-1">
              <div
                data-testid="text-line-skeleton"
                className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"
              />
              <div
                data-testid="text-line-skeleton"
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div
              data-testid="text-line-skeleton"
              className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"
            />
            <div
              data-testid="text-line-skeleton"
              className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"
            />
            <div
              data-testid="text-line-skeleton"
              className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"
            />
          </div>
        </div>

        {/* Skeleton para o ProgressDashboard */}
        <div
          data-testid="progress-dashboard-skeleton"
          className="bg-white dark:bg-gray-900 shadow rounded-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                data-testid="stat-card-skeleton"
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg animate-pulse"
              >
                <div
                  data-testid="text-line-skeleton"
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"
                />
                <div
                  data-testid="text-line-skeleton"
                  className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                data-testid="detail-section-skeleton"
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg animate-pulse"
              >
                <div
                  data-testid="text-line-skeleton"
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"
                />
                <div className="space-y-3">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      data-testid="text-line-skeleton"
                      className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
