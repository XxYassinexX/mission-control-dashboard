import { ColumnVisibility } from "./ColumnsVisibility"
import type { DataGridProps } from "./DataGrid.types"
import { Pagination } from "./Pagination"
import { useFiltering } from "./hooks/useFiltering"
import { usePagination } from "./hooks/usePagination"
import { useSorting } from "./hooks/useSorting"
import { useVisibleColumns } from "./hooks/useVisibleColumns"

export function DataGrid<T>({
  data,
  columns,
  loading,
  error,
}: DataGridProps<T>) {
  const { visibleColumns, hiddenColumns, toggleHiddenColumn } = useVisibleColumns({ columns })
  
  const { filteredData, filters, setFilter } = useFiltering(data, columns)

  const { sortedData, toggleSort, sortColumn, sortDirection } = useSorting(filteredData)

  const {
    pageSize,
    paginatedData,
    goToPreviousPage,
    goToNextPage,
    changePageSize,
    isPreviousDisabled,
    isNextDisabled,
  } = usePagination({ data: sortedData })

  if (loading) {
    return <div className="">Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
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
                <th key={column.id} className="text-left p-2 border-b" >
                  <div className="flex gap-2 cursor-pointer" onClick={() => toggleSort(column)}>
                    {column.label}
                    {sortColumn === column.accessor && (
                      <span className="ml-2">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                  
                  <input
                    className="mt-1 w-full border px-1"
                    value={filters[column.id] ?? ""}
                    onChange={(e) =>
                      setFilter(column.id, e.target.value)
                    }
                  />
                  
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
           {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={visibleColumns.length} className="text-center p-4">
                  No data available
                </td>
              </tr>
            ) : (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {visibleColumns
                  .map(column => (
                    <td key={column.id} className="p-2 border-b">
                      {String(row[column.accessor])}
                    </td>
                  ))}
              </tr>
            )))}
        </tbody>

      </table>

      <div className="flex gap-4 mt-4">
        <Pagination
          value={pageSize}
          onChange={changePageSize}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
        />
      </div>
    </div>
  )
}