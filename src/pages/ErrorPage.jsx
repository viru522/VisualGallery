import { Link, useNavigate } from "react-router-dom"

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-zinc-700">
          404
        </h1>

        <h2 className="text-xl font-medium">
          Page not found
        </h2>

        <p className="text-sm text-zinc-400 leading-relaxed">
          The page you’re trying to access doesn’t exist or was moved.
          This is a routing issue, not your fault.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            Go back
          </button>

          <Link
            to="/"
            className="px-4 py-2 rounded-full bg-amber-500 text-zinc-900 text-sm font-medium hover:bg-amber-400"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
