"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PlusCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="flex flex-col items-center justify-center py-6">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight">Ever AI</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"}>
                <Link href="/">
                  <PlusCircle className="mr-1 h-4 w-4" />
                  <span>Create Pins</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/create"}>
                <Link href="/create">
                  <Home className="mr-1 h-4 w-4" />
                  <span>Recent Post</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="mt-auto">
          {/* <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-2 flex flex-col items-start justify-center">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">@johndoe</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu> */}
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

