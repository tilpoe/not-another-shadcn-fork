import { Button } from "@/registry/default/ui/button"

export default function ButtonDefaultVariant() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button variant="default" intent="default">
        Destructive
      </Button>
      <Button variant="default" intent="destructive">
        Destructive
      </Button>
    </div>
  )
}
