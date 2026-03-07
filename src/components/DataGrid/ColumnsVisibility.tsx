import type { Column } from "./DataGrid.types"

type ColumnVisibilityProps<T> = {
  columns: Column<T>[]
  hiddenColumns: string[]
  toggleHiddenColumn: (col: Column<T>) => void
}

export function ColumnVisibility<T>({
  columns,
  hiddenColumns,
  toggleHiddenColumn,
}: ColumnVisibilityProps<T>) {
  return (
    <div className="mb-4 flex gap-2 flex-wrap">
      {columns.map((col) => (
        <label key={col.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!hiddenColumns.includes(col.id)}
            onChange={() => toggleHiddenColumn(col)}
          />
          {col.label}
        </label>
      ))}
    </div>
  )
}