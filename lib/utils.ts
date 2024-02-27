import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";

// cn (classNames)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// generate id
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-",
  12
);
export function genId() {
  return nanoid();
}
