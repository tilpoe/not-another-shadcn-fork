"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { VariantProps, cva } from "cva"
import { X } from "lucide-react"

import { autoRef, cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                   Dialog                                   */
/* -------------------------------------------------------------------------- */

export const Dialog = DialogPrimitive.Root

/* -------------------------------------------------------------------------- */
/*                                DialogTrigger                               */
/* -------------------------------------------------------------------------- */

export const DialogTrigger = DialogPrimitive.Trigger

/* -------------------------------------------------------------------------- */
/*                                DialogPortal                                */
/* -------------------------------------------------------------------------- */

export const DialogPortal = DialogPrimitive.Portal

/* -------------------------------------------------------------------------- */
/*                                 DialogClose                                */
/* -------------------------------------------------------------------------- */

export const DialogClose = DialogPrimitive.Close

/* -------------------------------------------------------------------------- */
/*                                DialogOverlay                               */
/* -------------------------------------------------------------------------- */

export type DialogOverlayProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Overlay
>

export const DialogOverlay = autoRef(
  ({ className, ...props }: DialogOverlayProps) => {
    return (
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                DialogContent                               */
/* -------------------------------------------------------------------------- */

export const dialogContentVariants = cva({
  base: cn(
    "fixed left-[50%] z-50 flex w-full translate-x-[-50%] flex-col gap-4 bg-background p-6 shadow-lg duration-200 sm:top-[50%] sm:max-h-[90%] sm:translate-y-[-50%] sm:border -sm:bottom-0",
    "sm:rounded-lg md:w-full",
    "sm:data-[state=open]:animate-in sm:data-[state=open]:fade-in-0 sm:data-[state=open]:zoom-in-95 sm:data-[state=open]:slide-in-from-left-1/2 sm:data-[state=open]:slide-in-from-top-[48%]",
    "sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=closed]:zoom-out-95 sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=closed]:slide-out-to-top-[48%]",
    "-sm:data-[state=closed]:slide-out-to-bottom -sm:data-[state=open]:slide-in-from-bottom -sm:data-[state=closed]:duration-300 -sm:data-[state=open]:duration-500"
  ),
  variants: {
    size: {
      default: "sm:max-w-lg",
      lg: "sm:max-w-3xl",
      xl: "sm:max-w-6xl",
    },
    mobileViewport: {
      full: "h-screen",
      fit: "-sm:max-h-[90%] -sm:border-t",
    },
  },
  defaultVariants: {
    size: "default",
    mobileViewport: "fit",
  },
})

export type DialogContentProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Content
> &
  VariantProps<typeof dialogContentVariants>

export const DialogContent = autoRef(
  ({ className, children, size, ...props }: DialogContentProps) => {
    return (
      <DialogPortal>
        <DialogOverlay>
          <DialogPrimitive.Content
            className={cn(dialogContentVariants({ size }))}
          >
            {children}
            <DialogPrimitive.Close
              className={cn(
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              )}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogOverlay>
      </DialogPortal>
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                DialogHeader                                */
/* -------------------------------------------------------------------------- */

export type DialogHeaderProps = React.ComponentPropsWithRef<"div">

export const DialogHeader = autoRef(
  ({ className, ...props }: DialogHeaderProps) => {
    return (
      <div
        className={cn(
          "flex flex-col space-y-1.5 text-center sm:text-left",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 DialogBody                                 */
/* -------------------------------------------------------------------------- */

export type DialogBodyProps = React.ComponentPropsWithRef<"div">

export const DialogBody = autoRef(
  ({ className, ...props }: DialogBodyProps) => (
    <div
      className={cn("flex grow flex-col gap-4 overflow-y-auto", className)}
      {...props}
    />
  )
)

/* -------------------------------------------------------------------------- */
/*                                DialogFooter                                */
/* -------------------------------------------------------------------------- */

export type DialogFooterProps = React.ComponentPropsWithRef<"div">

export const DialogFooter = autoRef(
  ({ className, ...props }: DialogFooterProps) => (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-0 sm:space-x-2",
        className
      )}
      {...props}
    />
  )
)

/* -------------------------------------------------------------------------- */
/*                                 DialogTitle                                */
/* -------------------------------------------------------------------------- */

export type DialogTitleProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Title
>

export const DialogTitle = autoRef(
  ({ className, ...props }: DialogTitleProps) => {
    return (
      <DialogPrimitive.Title
        className={cn(
          "text-lg font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                              DialogDescription                             */
/* -------------------------------------------------------------------------- */

export type DialogDescriptionProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Description
>

export const DialogDescription = autoRef(
  ({ className, ...props }: DialogDescriptionProps) => {
    return (
      <DialogPrimitive.Description
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  }
)
