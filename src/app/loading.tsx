export default function Loading() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="container-main py-24 md:py-32">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-12 w-48 rounded-lg bg-bg-tertiary mx-auto animate-pulse" />
          <div className="h-6 w-96 max-w-full rounded-lg bg-bg-tertiary mx-auto animate-pulse" />
        </div>
        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-bg-secondary border border-border-subtle overflow-hidden"
            >
              <div className="h-52 bg-bg-tertiary animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-3/4 rounded bg-bg-tertiary animate-pulse" />
                <div className="h-4 w-full rounded bg-bg-tertiary animate-pulse" />
                <div className="h-4 w-2/3 rounded bg-bg-tertiary animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
