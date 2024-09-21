// Import the clsx function from the clsx package, which is used for conditionally joining class names
import { clsx, type ClassValue } from 'clsx'
// Import the twMerge function from the tailwind-merge package, which is used to merge Tailwind CSS classes
import { twMerge } from 'tailwind-merge'

// Export a function called cn (short for class name) that accepts any number of ClassValue inputs
// The function returns the result of merging the class names using the clsx and twMerge functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
