type PaginationProps = {
  value: number
  onChange: (nextPageSize: number) => void
  isPreviousDisabled: boolean
  isNextDisabled: boolean
  onPrevious: () => void
  onNext: () => void
}

export function Pagination({
  value,
  onChange,
  isPreviousDisabled,
  isNextDisabled,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="page-size" className="text-sm">
        Page size
      </label>
      <select
        id="page-size"
        className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <button
        className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isPreviousDisabled}
        onClick={onPrevious}
      >
        Previous
      </button>

      <button
        className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isNextDisabled}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  )
}
