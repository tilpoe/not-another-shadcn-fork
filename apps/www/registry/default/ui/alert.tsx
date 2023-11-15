import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "cva"
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
} from "lucide-react"

import { autoRef, cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                    Alert                                   */
/* -------------------------------------------------------------------------- */

export const alertVariants = cva({
  base: cn(
    "relative w-full rounded-lg border p-4",
    "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7"
  ),
  variants: {
    type: {
      default: "bg-background text-foreground",
      error: "border-destructive bg-destructive/10 text-destructive",
      info: "border-sky-200 bg-sky-500/10 text-sky-900",
      warning: "border-orange-400 bg-orange-500/10 text-orange-800",
      success: "border-green-600 bg-green-500/10 text-green-900",
    },
  },
  defaultVariants: {
    type: "info",
  },
})

export type AlertProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof alertVariants> & {
    defaultIcon?: VariantProps<typeof alertVariants>["type"]
    icon?: React.ReactNode
  }

export const Alert = autoRef(
  ({
    ref,
    className,
    children,
    type = "default",
    defaultIcon,
    icon,
    ...props
  }: AlertProps) => {
    let chosenIcon = defaultIcon ?? type
    let Icon
    switch (chosenIcon) {
      case "default": {
        Icon = null
        break
      }
      case "error": {
        Icon = <AlertCircleIcon className="h-4 w-4" />
        break
      }
      case "info": {
        Icon = <InfoIcon className="h-4 w-4" />
        break
      }
      case "warning": {
        Icon = <AlertTriangleIcon className="h-4 w-4" />
        break
      }
      case "success": {
        Icon = <CheckCircle2Icon className="h-4 w-4" />
        break
      }
    }

    if (icon !== undefined) {
      Icon = <Slot className="h-4 w-4">{icon}</Slot>
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ type }), className)}
        {...props}
      >
        {Icon}
        {children}
      </div>
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 AlertTitle                                 */
/* -------------------------------------------------------------------------- */

export type AlertTitleProps = React.ComponentPropsWithRef<"h5">

export const AlertTitle = autoRef(
  ({ className, ...props }: AlertTitleProps) => {
    return (
      <h5
        className={cn(
          "mb-1 font-medium leading-none tracking-tight",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                              AlertDescription                              */
/* -------------------------------------------------------------------------- */

export type AlertDescriptionProps = React.ComponentPropsWithRef<"div">

export const AlertDescription = autoRef(
  ({ className, ...props }: AlertDescriptionProps) => {
    return (
      <div
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
      />
    )
  }
)
