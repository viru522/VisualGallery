import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import GalleryGrid from "../components/GalleryGrid"
import Pagination from "../components/Pagination"

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=30`
      )
      setImages(res.data)
      setLoading(false)
    }

    fetchImages()
  }, [page])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <GalleryGrid images={images} loading={loading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}
