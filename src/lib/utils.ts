import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}