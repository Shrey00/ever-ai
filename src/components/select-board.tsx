"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SelectBoard({
  accessToken,
  value,
  setValue,
  setCreateBoardOpen
}: {
  accessToken?: string;
  value: string;
  setValue: (value: string) => void;
  setCreateBoardOpen: (value: boolean) => void;
}) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  const [boards, setBoards] = React.useState<{ name: string; id: string }[]>([]);
  React.useEffect(() => {
    const getBoards = async () => {
      const boards = await fetch(`/api/get-boards?accessToken=${accessToken}`);
      const boardData = await boards.json();
      setBoards(boardData.items);
    };
    getBoards();
  }, []);
  const handleBoardModalOpen = () => {
    setCreateBoardOpen(true);
  }
  return (
    <div>
      {accessToken && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? boards.find(
                    (board: { id: string; name: string }) => board.id === value
                  )?.name
                : "Select Board"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Boards..." className="h-9" />
              <CommandList>
                <CommandEmpty>No board found.</CommandEmpty>
                <CommandGroup>
                  {boards?.map((board: { id: string; name: string }) => (
                    <CommandItem
                      key={board.id}
                      value={board.id}
                      className="cursor-pointer"
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {board.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === board.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
            <div className="p-1 pt-0">
            <Button className="w-full cursor-pointer font-normal" variant="ghost" onClick={handleBoardModalOpen}><PlusIcon/>Create Board</Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
