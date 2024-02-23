import {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {CommandItem} from "@/components/ui/command.tsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimFirstName(fullName: string): string {
  const trimmedName = fullName.trim();
  const firstSpaceIndex = trimmedName.indexOf(' ');
  return firstSpaceIndex !== -1 ? trimmedName.substring(0, firstSpaceIndex) : trimmedName;
}


