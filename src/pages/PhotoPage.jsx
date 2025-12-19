import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function PhotoPage() {
  const { id } = useParams()
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    axios
      .get(`https://picsum.photos/id/${id}/info`)
      .then(res => setPhoto(res.data))
  }, [id])

  if (!photo) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <Link to="/" className="text-sm text-amber-400">
        ← Back to gallery
      </Link>

      <div className="max-w-4xl mx-auto mt-8">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full rounded-xl"
        />
        <h2 className="mt-4 text-xl font-medium">
          {photo.author}
        </h2>
      </div>
    </div>
  )
}
