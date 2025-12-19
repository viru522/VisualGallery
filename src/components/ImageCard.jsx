import { Link } from "react-router-dom"
import { memo } from "react"

const ImageCard = memo(({ image }) => {
  return (
    <Link
      to={`/photo/${image.id}`}
      className="group bg-zinc-900 rounded-xl overflow-hidden hover:shadow-xl transition block"
    >
      <div className="relative">
        <img
          src={image.download_url}
          alt={image.author}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-3">
        <p className="text-sm text-zinc-300 truncate">
          {image.author}
        </p>
      </div>
    </Link>
  )
})

export default ImageCard
