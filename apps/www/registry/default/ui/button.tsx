"use client"

import React, { createContext, useContext, useMemo } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "cva"
import { Loader2 } from "lucide-react"

import { autoRef, cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                   Context                                  */
/* -------------------------------------------------------------------------- */

interface ButtonContextType {
  isLoading?: boolean
  iconOnly?: boolean
  size?: VariantProps<typeof buttonVariants>["size"]
}

const ButtonContext = createContext<ButtonContextType | null>(null)

function useButtonContext() {
  const context = useContext(ButtonContext)
  if (!context) {
    throw new Error("useButtonContext must be used within a <Button/>")
  }
  return context
}

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

export const buttonVariants = cva({
  base: cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50"
  ),
  variants: {
    variant: {
      default: "",
      secondary: "",
      outline: "border bg-background",
      ghost: "",
    },
    intent: {
      default: "",
      destructive: "",
    },
    size: {
      xs: "h-8 px-2 text-xs",
      sm: "h-9 px-3",
      default: "h-10 px-3",
      lg: "h-11 px-5",
    },
    icon: {
      true: "",
      false: "",
    },
    width: {
      default: "inline-flex",
      full: "flex w-full",
    },
  },
  compoundVariants: [
    // default variant
    {
      variant: "default",
      intent: "default",
      className: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
    {
      variant: "default",
      intent: "destructive",
      className:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    },
    // secondary variant
    {
      variant: "secondary",
      intent: "default",
      className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
    // outline variant
    {
      variant: "outline",
      intent: "default",
      className: "border-input hover:bg-accent",
    },
    {
      variant: "outline",
      intent: "destructive",
      className: "border-destructive text-destructive hover:bg-destructive/5",
    },
    // ghost variant
    {
      variant: "ghost",
      intent: "default",
      className: "hover:bg-accent",
    },
    {
      variant: "ghost",
      intent: "destructive",
      className: "text-destructive hover:bg-destructive/10",
    },
    // icon only
    {
      size: "sm",
      icon: true,
      className: "h-9 w-9 p-2",
    },
    {
      size: "default",
      icon: true,
      className: "h-10 w-10 px-0",
    },
    {
      size: "lg",
      icon: true,
      className: "h-11 w-11 px-0",
    },
  ],
  defaultVariants: {
    variant: "default",
    intent: "default",
    size: "default",
    width: "default",
    icon: false,
  },
})

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

export const Button = autoRef(
  ({
    children,
    className,
    width,
    variant,
    size,
    asChild = false,
    icon,
    intent,
    isLoading,
    disabled,
    type,
    ref,
    ...props
  }: ButtonProps) => {
    const Comp = asChild ? Slot : "button"

    const buttonContextValues = useMemo(
      () => ({
        isLoading,
        iconOnly: icon,
        size,
      }),
      [isLoading, icon, size]
    )

    const hasIcon = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === ButtonIcon
    )

    return (
      <ButtonContext.Provider value={buttonContextValues}>
        <Comp
          className={cn(
            buttonVariants({ variant, size, width, icon, intent }),
            className
          )}
          disabled={isLoading || disabled}
          type={props.form !== undefined ? "submit" : type ?? "button"}
          ref={ref}
          {...props}
        >
          {asChild ? (
            children
          ) : (
            <>
              {!hasIcon && <ButtonLoader />}
              {children}
            </>
          )}
        </Comp>
      </ButtonContext.Provider>
    )
  }
)

/* -------------------------------------------------------------------------- */
/*                                 ButtonIcon                                 */
/* -------------------------------------------------------------------------- */

export const ButtonIcon = ({
  icon,
  className,
  only,
}: {
  icon?: React.ReactNode
  className?: string
  only?: boolean
}) => {
  const { isLoading, iconOnly } = useButtonContext()
  const isIconOnly = iconOnly || only

  if (isLoading) {
    return (
      <Loader2
        className={cn("h-4 w-4 animate-spin", !isIconOnly && "mr-2", className)}
      />
    )
  }

  return (
    <Slot className={cn("h-4 w-4", !isIconOnly && "mr-2", className)}>
      {icon}
    </Slot>
  )
}

/* -------------------------------------------------------------------------- */
/*                                ButtonLoader                                */
/* -------------------------------------------------------------------------- */

export const ButtonLoader = ({ show }: { show?: boolean }) => {
  const { isLoading } = useButtonContext()

  if (isLoading ?? show) {
    return <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  }

  return null
}
