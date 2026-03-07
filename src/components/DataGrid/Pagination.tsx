type PaginationProps = {
  value: number
  onChange: (nextPageSize: number) => void
}

export function Pagination({ value, onChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
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
    </div>
  )
}
