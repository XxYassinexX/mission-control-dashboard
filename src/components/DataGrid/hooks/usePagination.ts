import { useState } from "react"

type UsePaginationProps<T> = {
  data: T[]
  initialPageSize?: number
}

export function usePagination<T>({
  data,
  initialPageSize = 20,
}: UsePaginationProps<T>) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const start = (page - 1) * pageSize
  const paginatedData = data.slice(start, start + pageSize)
  const goToPreviousPage = () => setPage(p => p - 1)
  const goToNextPage = () => setPage(p => p + 1)
  const changePageSize = (nextPageSize: number) => {
    setPageSize(nextPageSize)
    setPage(1)
  }
  const isPreviousDisabled = page === 1
  const isNextDisabled = page * pageSize >= data.length

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    start,
    paginatedData,
    goToPreviousPage,
    goToNextPage,
    changePageSize,
    isPreviousDisabled,
    isNextDisabled,
  }
}