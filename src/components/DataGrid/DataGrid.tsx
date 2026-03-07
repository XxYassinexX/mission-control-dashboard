import { ColumnVisibility } from "./ColumnsVisibility"
import type { DataGridProps } from "./DataGrid.types"
import { Pagination } from "./Pagination"
import { usePagination } from "./hooks/usePagination"
import { useVisibleColumns } from "./hooks/useVisibleColumns"

export function DataGrid<T>({
  data,
  columns,
  loading,
  error,
}: DataGridProps<T>) {
  const { visibleColumns, hiddenColumns, toggleHiddenColumn } = useVisibleColumns({ columns })

  const {
    pageSize,
    paginatedData,
    goToPreviousPage,
    goToNextPage,
    changePageSize,
    isPreviousDisabled,
    isNextDisabled,
  } = usePagination({ data })

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

      <ColumnVisibility
        columns={columns}
        hiddenColumns={hiddenColumns}
        toggleHiddenColumn={toggleHiddenColumn}
      />


      <table className="w-full border-collapse">

        <thead>
          <tr>
            {visibleColumns
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
              {visibleColumns
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
          onChange={changePageSize}
        />

        <button
          className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPreviousDisabled}
          onClick={goToPreviousPage}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isNextDisabled}
          onClick={goToNextPage}
        >
          Next
        </button>

      </div>
    </div>
  )
}