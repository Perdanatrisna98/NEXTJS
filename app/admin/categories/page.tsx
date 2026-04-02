    import { Button } from "@/components/ui/button"
    import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card"
    // import { Input } from "@/components/ui/input"
    // import { Label } from "@/components/ui/label"
    import { DataTable } from "./data-table"
import { ColumnDef } from "@tanstack/react-table"

type Category = {
  id: number
  name: string
}

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
]

const data: Category[] = [
  { id: 1, name: "Ruka" },
  { id: 2, name: "Ahyeon" },
]

    export default function CategoriesPage() {
    return (
        <Card className="m-4">

        <CardHeader>
            <CardTitle>Login to your account</CardTitle>

            <CardDescription>
            Enter your email below to login to your account
            </CardDescription>

            <CardAction>
            {/* <Button variant="link">Sign Up</Button> */}
            </CardAction>

        </CardHeader>

        <CardContent>
            <div className="p-4">
            <DataTable columns={columns} data={data} />
            </div>
        </CardContent>

        <CardFooter>
        </CardFooter>
        </Card>
    )
    }
