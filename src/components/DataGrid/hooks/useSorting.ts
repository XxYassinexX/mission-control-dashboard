import { useState, useMemo } from "react"
import type { Column } from "../DataGrid.types"

type SortDirection = "asc" | "desc"

export function useSorting<T>(data: T[]) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  function toggleSort(column: Column<T>) {
    if (sortColumn === column.accessor) {
      setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortColumn(column.accessor)
      setSortDirection("asc")
    }
  }

  const sortedData = useMemo(() => {
    if (!sortColumn) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [data, sortColumn, sortDirection])

  return {
    sortedData,
    toggleSort,
    sortColumn,
    sortDirection,
  }
}