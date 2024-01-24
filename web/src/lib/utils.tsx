import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {ReactNode} from "react";
import {CommandItem} from "@/components/ui/command.tsx";
import {useNavigate} from "react-router-dom";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateListItem(icon : ReactNode, title: string, href: string) {
    return <CommandItem>{title} </CommandItem>
}