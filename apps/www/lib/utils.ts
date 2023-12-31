import { forwardRef, type ForwardedRef, type ReactElement } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

interface AutoRefFunction {
  (props: any): ReactElement | null
  displayName?: string
}

export function autoRef<
  Fn extends AutoRefFunction,
  Props extends { ref?: RefType },
  RefType
>(fn: Fn) {
  const AutoRef = (props: Props, ref: ForwardedRef<RefType>) =>
    fn({ ...props, ref })
  AutoRef.displayName = fn.displayName || fn.name || "AutoRef"
  return forwardRef(AutoRef) as unknown as Fn
}
