import { useState } from "react"
import type { Column } from "../DataGrid.types"

type UseVisibleColumnsProps<T> = {
  columns: Column<T>[]
}

export function useVisibleColumns<T>({ columns }: UseVisibleColumnsProps<T>) {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([])
  const visibleColumns = columns.filter(
    col => !hiddenColumns.includes(col.id)
  )
  const toggleHiddenColumn = (col: Column<T>) => {
    setHiddenColumns(prev =>
      prev.includes(col.id)
        ? prev.filter(id => id !== col.id)
        : [...prev, col.id]
    )
  }

  return {
    hiddenColumns,
    setHiddenColumns,
    visibleColumns,
    toggleHiddenColumn,
  }
}