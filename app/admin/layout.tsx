import { AppSidebar } from "./components/sidebar/sidebar.module"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminPage({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <div className="p-4">
                    <SidebarTrigger />
                    {children}
                </div>
            </SidebarInset>

        </SidebarProvider>
    )
}