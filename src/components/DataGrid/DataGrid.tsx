import { useState } from "react"
import type { DataGridProps } from "./DataGrid.types"
import { Pagination } from "./Pagination"

export function DataGrid<T>({
  data,
  columns,
  loading,
  error,
}: DataGridProps<T>) {

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(20)

  const start = page * pageSize
  const paginatedData = data.slice(start, start + pageSize)

  if (loading) {
    return <div className="">Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (data.length === 0) {
    return <div className="text-center">No data available</div>
  }

  return (
    <div>
      <table className="w-full border-collapse">

        <thead>
          <tr>
            {columns
              .map(column => (
                <th key={column.id} className="text-left p-2 border-b">
                  {column.label}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns
                .map(column => (
                  <td key={column.id} className="p-2 border-b">
                    {String(row[column.accessor])}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>

      </table>

      <div className="flex gap-4 mt-4">
        <Pagination
          value={pageSize}
          onChange={nextPageSize => {
            setPageSize(nextPageSize)
            setPage(0)
          }}
        />

        <button
          className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === 0}
          onClick={() => setPage(p => p - 1)}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={(page + 1) * pageSize >= data.length}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>

      </div>
    </div>
  )
}