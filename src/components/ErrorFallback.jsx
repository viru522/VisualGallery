import { Link } from "react-router-dom"

export default function ErrorFallback() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold">
          Something went wrong
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed">
          The app encountered an unexpected error while rendering.
          This is a UI failure, not a network issue.
        </p>

        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-full bg-amber-500 text-zinc-900 text-sm font-medium hover:bg-amber-400"
        >
          Reload Gallery
        </Link>
      </div>
    </div>
  )
}
