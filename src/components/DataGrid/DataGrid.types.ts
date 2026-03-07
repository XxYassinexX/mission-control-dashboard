export type Column<T> = {
  id: string
  label: string
  accessor: keyof T
}

export type DataGridProps<T> = {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  error?: string | null
}