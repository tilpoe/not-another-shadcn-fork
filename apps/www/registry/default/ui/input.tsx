"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "cva"
import { Loader2 } from "lucide-react"

import { autoRef, cn } from "@/lib/utils"

export const inputVariants = cva({
  base: cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-[16px] focus-visible:ring-offset-2",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "ring-offset-background",
    "placeholder:text-sm placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ),
})

export type InputProps = React.ComponentPropsWithRef<"input"> & {
  icon?: boolean
  isLoading?: boolean
  onEnterPress?: () => void
  classNameInput?: string
}

export const Input = autoRef(
  ({
    className,
    classNameInput,
    isLoading,
    icon,
    onEnterPress,
    onKeyDown,
    ...props
  }: InputProps) => {
    function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
      if (onEnterPress && e.key === "Enter") {
        onEnterPress()
      }

      onKeyDown?.(e)
    }

    return (
      <div className={cn("relative flex h-10 items-center", className)}>
        <input
          className={cn(inputVariants(), (icon || isLoading) && "sm:pl-9")}
          onKeyDown={handleEnterPress}
          {...props}
        />
        {icon && !isLoading && (
          <Slot className="absolute left-[8px] h-[18px] w-[18px] text-muted-foreground -sm:hidden">
            {icon}
          </Slot>
        )}
        {isLoading && (
          <Loader2 className="absolute left-[8px] h-[18px] w-[18px] animate-spin text-muted-foreground" />
        )}
      </div>
    )
  }
)
