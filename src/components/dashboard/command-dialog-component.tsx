"use client";

import { useEffect, useState } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui";

const CommandDialogDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 bg-secondary-600 rounded-full w-full max-w-[500px]">
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <div className="flex-grow md:w-[250px] lg:w-[400px] w-full">
              {" "}
              {/* Ajusta el max-w aquí */}
              <Button
                variant={"ghost"}
                className="group rounded-full w-full flex items-center"
                size="default"
                onClick={() => setOpen(true)}
              >
                <Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <p className="ml-3">Buscar</p>
                <span className="ml-2 text-sm text-muted-foreground hidden lg:inline-flex items-center">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded bg-white dark:bg-gray-600/50 px-1.5 font-mono text-sm font-bold text-gray-600 dark:text-gray-400 opacity-100">
                    <span className="text-xs">⌘</span>J
                  </kbd>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="w-full max-w-lg">
          {" "}
          {/* Ajusta el ancho máximo aquí */}
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
};

export default CommandDialogDemo;
