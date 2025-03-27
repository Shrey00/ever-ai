"use client"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { X, ImagePlus } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { Dialog } from "@/components/ui/dialog";
import PinsDisplayModal from "@/components/pins-display-modal";
import { ResponseDataArr } from "@/types/index";
export function ImageUpload({link, setLink} : {link: string, setLink: (value: string)=>void}) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [textGenerationLoading, setTextGenerationLoading] = useState(false);
  const [response, setResponse] = useState<ResponseDataArr>([])
  const [showReviewModal, setShowReviewModal] = useState(false);
  const OPENAI_ENDPOINT = process.env.NEXT_PUBLIC_OPEN_AI_URL!;
  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPEN_AI_SECRET!;
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles])

    // Create previews
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviews((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const removeImage = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
    setPreviews(previews.filter((_, i) => i !== index))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
  })

    
  async function getMetadataForImages(files: File[]): Promise<{ title: string; description: string }[]> {
    try {
      setTextGenerationLoading(true);
      const base64Images = await Promise.all(
        files.map(file => toBase64(file))
      );
      const response = await axios.post(
        OPENAI_ENDPOINT,
        {
          model: 'gpt-4o',
          input: [
            {
              role: 'user',
              content: [
               {
                  type:'input_text',
                  text: 'Analyze these images and generate a catchy title, description, alt_text for each respectively, suitable for a post in Pinterest.\n Give your response in a json format without explicitly mentioning its json,and not as a markdown text, a json string like this,-\n[{"title":"This is title","description": "This is description", alt_text:"This is alt text"}]',
               },
               ...base64Images.map((image) => {
                  return {
                    type: 'input_image',
                    image_url: image,
                  }
                })
              ]
            },
          ],
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = response.data.output[0].content[0].text;
      console.log(data);
      setResponse(JSON.parse(data));
      setTextGenerationLoading(false);
      setShowReviewModal(true);
      return response.data;
    } catch (error) {
      console.error('Error processing images:', error);
      return [];
    } finally {
      setTextGenerationLoading(false);
    }
  }

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  // Example usage
  // const imageFiles: File[] = []; // Populate this with files from input

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <ImagePlus className="h-10 w-10 text-muted-foreground" />
          <h3 className="font-medium text-lg">Drag & drop images here</h3>
          <p className="text-sm text-muted-foreground">or click to browse files</p>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-medium">Selected Images ({previews.length})</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                <Image src={preview || "/placeholder.svg"} alt={`Preview ${index}`} fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 rounded-full bg-background/80 p-1 text-foreground hover:bg-background"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove image</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
     

      <Button className="w-full cursor-pointer" size="lg" disabled={files.length === 0} onClick={()=>{
        getMetadataForImages(files).then(results => console.log(results));
      }}>
        Generate Title and Description
      </Button>
      {
        textGenerationLoading && <div className="bg-[rgb(0,0,0,0.9)] h-[100vh] w-[100vw] fixed top-0 left-0 z-10 flex items-center justify-center" onClick={()=>alert()}>
          <div>
            <Spinner size='medium' className="text-white m-3"/>
            <p className="text-md text-white">Generating Title and Description for uploaded assets</p>
          </div>
        </div>
      }
      <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
        <PinsDisplayModal link={link} setLink={setLink} data={response} previews={previews}/>
      </Dialog>
    </div>
  )
}

