import type { TableProps } from './types/table.type'

export const useTable = (props: TableProps) => {
  const page = ref(1)
  const rowsPerPage = ref(8)
  const paginatedData = ref()
  const start = ref(1)
  const end = ref(8)

  const updateData = () => {
    start.value = (page.value - 1) * rowsPerPage.value
    end.value = start.value + rowsPerPage.value
    paginatedData.value = props.rows?.slice(start.value, end.value)
  }

  return {
    page,
    rowsPerPage,
    paginatedData,
    start,
    end,
    updateData
  }
}
