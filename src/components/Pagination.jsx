const Pagination = ({ page, setPage }) => (
  <footer className="flex justify-center items-center gap-6 pb-10">
    <button
      disabled={page === 0}
      onClick={() => setPage(p => Math.max(p - 1, 0))}
      className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800 disabled:opacity-30"
    >
      ← Prev
    </button>

    <span className="text-sm text-zinc-400">
      Page {page + 1}
    </span>

    <button
      onClick={() => setPage(p => p + 1)}
      className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800"
    >
      Next →
    </button>
  </footer>
)

export default Pagination
