    "use client";

    import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    } from "@/components/ui/sidebar"
    import { House, List, Users, Package } from "lucide-react";
    import Link from "next/link";

    export function AppSidebar() {
    return (
        <Sidebar>
        <SidebarHeader>
            <h1 className="px-4 font-bold text-lg">Dashboard</h1>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/admin">
                        <House />
                        <span>Home</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/admin/categories">
                        <List />
                        <span>Categories</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/admin/products">
                        <Package />
                        <span>Product</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/admin/users">
                        <Users />
                        <span>User Management</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter />
        </Sidebar>
    )
    }