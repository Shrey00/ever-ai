"use client";
import { SidebarNav } from "@/components/sidebar-nav";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { useSearchParams } from "next/navigation";
import { SelectBoard } from "@/components/select-board";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const [link, setLink] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [boardId, setBoardId] = useState("");
  // const searchParams = useSearchParams();
  useEffect(() => {
    // const accessToken = searchParams.get("accessToken");
    // const refreshToken = searchParams.get("refreshToken");
    const cookies = document.cookie.split(';');
    const accessToken = cookies.find(cookie => cookie.trim().startsWith('accessToken='))?.split('=')[1];
    // const refreshToken = cookies.find(cookie => cookie.trim().startsWith('refreshToken='));
    // if (accessToken) {
      // localStorage.setItem("token", accessToken!);
      // localStorage.setItem("refreshToken", refreshToken!);
    // }
    // const token = localStorage.getItem("token");
    console.log("COOKIES", accessToken)
    if (accessToken?.length) {
      setAccessToken(accessToken);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {loggedIn ? (
        <div className="flex min-h-screen bg-background">
          <SidebarNav />
          <main className="flex-1 p-6 lg:p-8">
            <div className="space-y-6">
              <div className="space-y-2 flex justify-between">
                <span>
                  <h1 className="text-3xl font-bold">Create New Pins</h1>
                  <p className="text-muted-foreground">
                    Upload images and create new pin to share with your
                    followers.
                  </p>
                </span>
                {accessToken.length && (
                  <SelectBoard
                    accessToken={accessToken}
                    value={boardId}
                    setValue={setBoardId}
                  />
                )}
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Add Link</h2>
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <ImageUpload link={link} setLink={setLink} boardId={boardId} />
            </div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 items-center justify-center h-[100vh] w-full">
          <Image
            src="/13338.jpg"
            alt="bg"
            className="fixed w-full h-full bg-cover z-0"
            width={"1000"}
            height={"1000"}
          />
          <div className="flex flex-col items-center z-10">
            <h1 className="text-3xl">Welcome to invelttoir!</h1>
            <h2 className="text-xl">
              Please connect our app with your Pinterest to continue
            </h2>
          </div>
          <Button asChild size={"lg"} className="z-10">
            <Link href="/api/oauth/pinterest/install">Connect</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
