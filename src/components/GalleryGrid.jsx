import ImageCard from "./ImageCard"
import SkeletonGrid from "./SkeletonGrid"

const GalleryGrid = ({ images, loading }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      {loading ? (
        <SkeletonGrid />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {images.map(img => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      )}
    </section>
  )
}

export default GalleryGrid
