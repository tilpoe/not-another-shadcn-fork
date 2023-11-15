import React from "react"

import { autoRef, cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */

export type CardProps = React.ComponentPropsWithRef<"div">

export const Card = autoRef(({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "tp-card",
        "flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm"
      )}
      {...props}
    />
  )
})

/* -------------------------------------------------------------------------- */
/*                                 CardHeader                                 */
/* -------------------------------------------------------------------------- */

export type CardHeaderProps = React.ComponentPropsWithRef<"div">

export const CardHeader = autoRef(
  ({ className, ...props }: CardHeaderProps) => {
    return (
      <div
        className={cn(
          "tp-card-header",
          "grid grid-cols-[1fr_auto] gap-4 p-6 sm:gap-8",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 CardHeading                                */
/* -------------------------------------------------------------------------- */

export type CardHeadingProps = React.ComponentPropsWithRef<"div">

export const CardHeading = autoRef(
  ({ className, ...props }: CardHeadingProps) => {
    return (
      <div
        className={cn(
          "tp-card-heading",
          "flex items-center gap-3 sm:flex-col sm:items-start sm:justify-center sm:gap-2",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 CardActions                                */
/* -------------------------------------------------------------------------- */

export type CardActionsProps = React.ComponentPropsWithRef<"div">

export const CardActions = autoRef(
  ({ className, ...props }: CardActionsProps) => {
    return (
      <div
        className={cn("tp-card-actions", "flex items-center gap-2", className)}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                  CardTitle                                 */
/* -------------------------------------------------------------------------- */

export type CardTitleProps = React.ComponentPropsWithRef<"h3">

export const CardTitle = autoRef(({ className, ...props }: CardTitleProps) => {
  return (
    <h3
      className={cn(
        "tp-card-title",
        "text-xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
})

/* -------------------------------------------------------------------------- */
/*                               CardDescription                              */
/* -------------------------------------------------------------------------- */

export type CardDescriptionProps = React.ComponentPropsWithRef<"p">

export const CardDescription = autoRef(
  ({ className, ...props }: CardDescriptionProps) => {
    return (
      <p
        className={cn(
          "tp-card-description",
          "text-sm text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 CardContent                                */
/* -------------------------------------------------------------------------- */

export type CardContentProps = React.ComponentPropsWithRef<"div">

export const CardContent = autoRef(
  ({ className, ...props }: CardContentProps) => {
    return (
      <div
        className={cn("tp-card-content", "p-6 pt-0", className)}
        {...props}
      />
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 CardFooter                                 */
/* -------------------------------------------------------------------------- */

export type CardFooterProps = React.ComponentPropsWithRef<"div">

export const CardFooter = autoRef(
  ({ className, ...props }: CardFooterProps) => {
    return (
      <div
        className={cn(
          "tp-card-footer",
          "flex items-center p-6 pt-0",
          className
        )}
        {...props}
      />
    )
  }
)
