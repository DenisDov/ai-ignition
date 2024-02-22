import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(str: string): string {
  const matches = str?.match(/\b(\w)/g);
  return matches?.join("") || "";
}
