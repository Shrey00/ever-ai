"use client"
import { SidebarNav } from "@/components/sidebar-nav"
import { ImageUpload } from "@/components/image-upload"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 p-6 lg:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <p className="text-muted-foreground">Upload images and create a new post to share with your followers.</p>
          </div>
          <ImageUpload />
        </div>
      </main>
    </div>
  )
}

