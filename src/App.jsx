import { Routes, Route } from "react-router-dom"
import GalleryPage from "./pages/GalleryPage"
import PhotoPage from "./pages/PhotoPage"
import ErrorPage from "./pages/ErrorPage"
import ErrorBoundary from "./components/ErrorBoundary"
import ErrorFallback from "./components/ErrorFallback"

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  )
}
