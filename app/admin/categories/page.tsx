import { columns, Payment } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "processing",
      email: "user@example.com",
    },
    {
      id: "923f5a67",
      amount: 500,
      status: "success",
      email: "admin@example.com",
    },
    {
      id: "345g7h89",
      amount: 75,
      status: "failed",
      email: "test@example.com",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}