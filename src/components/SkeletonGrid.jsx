const SkeletonGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="h-56 rounded-xl bg-zinc-800 animate-pulse"
      />
    ))}
  </div>
)

export default SkeletonGrid
