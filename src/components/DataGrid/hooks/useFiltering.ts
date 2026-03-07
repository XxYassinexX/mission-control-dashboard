import { useState, useMemo } from "react"
import type { Column } from "../DataGrid.types"

export function useFiltering<T>(data: T[], columns: Column<T>[]) {
  const [filters, setFilters] = useState<Record<string, string>>({})

  function setFilter(columnId: string, value: string) {
    setFilters((prev) => ({
      ...prev,
      [columnId]: value,
    }))
  }

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return columns.every((column) => {
        const filterValue = filters[column.id]
        if (!filterValue) return true

        const cellValue = String(row[column.accessor]).toLowerCase()

        return cellValue.includes(filterValue.toLowerCase())
      })
    })
  }, [data, columns, filters])

  return {
    filteredData,
    filters,
    setFilter,
  }
}