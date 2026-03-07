import type { DataGridProps } from "./DataGrid.types"

export function DataGrid<T>({
  data,
  columns,
  loading,
  error,
}: DataGridProps<T>) {

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
          {data.map((row, rowIndex) => (
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
    </div>
  )
}