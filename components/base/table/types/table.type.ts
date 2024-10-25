export type TableHeader = {
  title: string
  value: string
  width?: string
}

export type TableProps = {
  headers: Array<TableHeader>
  rows: Array<any>
}
