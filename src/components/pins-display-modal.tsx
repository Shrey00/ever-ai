"use client";
// import { useCallback, useState } from "react"
// import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  DialogTitle,
} from "@/components/ui/dialog";

import { ResponseDataArr } from "@/types/index";
export default function PinsDisplayModal({
  files,
  link,
  setLink,
  data,
  previews,
  boardId,
}: {
  files: File[];
  link: string;
  setLink: (value: string) => void;
  data: { title: string; description: string; alt_text: string }[];
  previews: string[];
  boardId: string;
}) {
  const [contentForImg, setContentForImg] = useState<ResponseDataArr>([]);
  const [uploadLoading, setUploadLoading] = useState(false);
    console.log(uploadLoading)
  const handleImgContentChange = (
    key: "title" | "description" | "alt_text",
    value: string,
    index: number
  ) => {
    const arr = [...contentForImg];
    arr[index][key] = value;
    setContentForImg(arr);
  };
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  useEffect(() => {
    setContentForImg(data);
  }, [data]);

  async function handlePinsUpload(index: number) {
    const base64Images = await Promise.all(files.map((file) => toBase64(file)));
    const accessToken = localStorage.getItem("token")!;
    setUploadLoading(true);
    // const boards = await fetch(`/api/get-boards?accessToken=${accessToken}`);
    const payload = {
      link: link,
      title: contentForImg[index].title,
      description: contentForImg[index].description,
      alt_text: contentForImg[index].alt_text,
      board_id: boardId,
      media_source: {
        source_type: "image_base64",
        content_type: files[index].type,
        data: base64Images[index],
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/create-pins?accessToken=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log("PIN DATA")
      console.log( response);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleUpload() {
    let i = 0;
    for (const item of previews) {
      console.log(item);
      await handlePinsUpload(i);
      ++i;
    }
  }
  return (
    <DialogContent
      onInteractOutside={(e) => e.preventDefault()}
      className="min-w-[60%] md:min-w-[80%]"
    >
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
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt={`Preview ${index}`}
                      fill
                      className="object-cover h-[200px] w-[200px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <Label>Link</Label>
                      <Input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Title</Label>
                      <Input
                        value={contentForImg[index]?.title}
                        onChange={(e) =>
                          handleImgContentChange("title", e.target.value, index)
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Description</Label>
                      <Textarea
                        className="h-[60px] resize-none"
                        value={contentForImg[index]?.description}
                        onChange={(e) =>
                          handleImgContentChange(
                            "description",
                            e.target.value,
                            index
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <DialogFooter>
        <Button
          type="submit"
          className="cursor-pointer w-full"
          onClick={handleUpload}
        >
          <Upload />
          Publish
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
