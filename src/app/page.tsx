"use client"
import { SidebarNav } from "@/components/sidebar-nav"
import { ImageUpload } from "@/components/image-upload"
import { Input } from "@/components/ui/input"
import { useState } from "react";
export default function Page() {
  const [link, setLink] = useState("");
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 p-6 lg:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create New Pins</h1>
            <p className="text-muted-foreground">Upload images and create new pin to share with your followers.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Add Link</h2>
            <Input className="was-[50%]" value={link} onChange={(e)=>setLink(e.target.value)}/>
          </div>
          <ImageUpload link={link} setLink={setLink}/>
        </div>
      </main>
    </div>
  )
}

