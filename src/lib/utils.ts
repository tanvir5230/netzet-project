import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export class Utils {
  static cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
}
