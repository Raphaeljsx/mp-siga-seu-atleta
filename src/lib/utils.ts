import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFollowers(count: number){
  if(count > 1000){
    return `${count/1000}k`
  }else if(count > 1000000){
    return `${count/1000000}M`
  }else if(count > 1000000000){
    return `${count/1000000000}B`
  }else{
    return count
  }
}
