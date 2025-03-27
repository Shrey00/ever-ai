"use client"
// import { useCallback, useState } from "react"
// import { useDropzone } from "react-dropzone"
import {  Upload } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils"
// import axios from "axios";
// import { Spinner } from "@/components/ui/spinner";
import {
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle
  } from "@/components/ui/dialog";

import { ResponseDataArr } from "@/types/index"
export default function PinsDisplayModal({link, setLink, data, previews} : {link: string, setLink: (value: string)=>void, data : {title: string, description: string, alt_text: string}[], previews: string[] }){
    const [contentForImg, setContentForImg] = useState<ResponseDataArr>([]);
    const handleImgContentChange = (key: 'title' | 'description' | 'alt_text', value: string, index: number) => {
        const arr  = [...contentForImg];
        arr[index][key] = value;
        setContentForImg(arr);
    }
    useEffect(()=> {
        setContentForImg(data);
    },[]);
    return (
        <DialogContent onInteractOutside={(e)=>e.preventDefault()} className="min-w-[60%] md:min-w-[80%]">
            <DialogHeader>
            <DialogTitle>Review Pins</DialogTitle>
            </DialogHeader>
                <div className="overflow-auto max-h-[68vh]">
                    {previews.length > 0 && (
                        <div className="space-y-4">
                        <div>
                            {previews.map((preview, index) => (
                            <div className="flex gap-4 py-4 border-b-1 " key={index}>
                                <div className="relative aspect-square rounded-md overflow-hidden border h-[200px] w-[200px]">
                                    <Image src={preview || "/placeholder.svg"} alt={`Preview ${index}`} fill className="object-cover h-[200px] w-[200px]" />
                                </div>
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <Label>Link</Label>
                                        <Input value={link} onChange={(e)=>setLink(e.target.value)}/>                                    
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Title</Label>
                                        <Input value={contentForImg[index]?.title} onChange={(e)=>handleImgContentChange('title', e.target.value, index)}/>                                    
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Description</Label>
                                        <Textarea className="h-[60px] resize-none" value={contentForImg[index]?.description} onChange={(e)=>handleImgContentChange('description', e.target.value, index)}/>                                    
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    )}
                </div>
            <DialogFooter>
          <Button type="submit" className="cursor-pointer w-full"><Upload/>Publish</Button>
        </DialogFooter>
        </DialogContent>
    )
}

