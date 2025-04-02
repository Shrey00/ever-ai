"use client";
// import { useCallback, useState } from "react"
// import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Label } from "@/components/ui/label";

// import { Textarea } from "@/components/ui/textarea";
// import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils"
// import axios from "axios";
// import { Spinner } from "@/components/ui/spinner";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
export default function CreateBoardModal({
  accessToken,
}: {
  accessToken: string;
}) {
  // const boards = await fetch(`/api/get-boards?accessToken=${accessToken}`);
  const boardFormSchema = z.object({
    name: z.string().min(1, {
      message: "Enter the name of the board",
    }),
    description: z.string(),
    privacy: z.enum(["public", "secret", "protected"]),
  });

  const form = useForm<z.infer<typeof boardFormSchema>>({
    resolver: zodResolver(boardFormSchema),
    defaultValues: {
      name: "",
      description: "",
      privacy: "public",
    },
  });
  async function onSubmit(values: z.infer<typeof boardFormSchema>) {
    console.log("values", values);
    const boards = await fetch(`/api/create-board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const boardData = await boards.json();
    console.log("Board Data created")
    console.log(boardData);
    // setBoards(boardData.items);
    // setCreateBoardOpen(false);
  }

  return (
    <DialogContent onInteractOutside={(e) => e.preventDefault()}>
      <DialogHeader>
        <DialogTitle>Create Board</DialogTitle>
      </DialogHeader>
      <div className="overflow-auto max-h-[68vh]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 px-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Board Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Board Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Privacy</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]" {...field}>
                        <SelectValue placeholder="Privacy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PUBLIC">Public</SelectItem>
                        <SelectItem value="PROTECTED">Protected</SelectItem>
                        <SelectItem value="SECRET">Secret</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full cursor-pointer" type="submit">
              <PlusIcon />
              Create
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
}
