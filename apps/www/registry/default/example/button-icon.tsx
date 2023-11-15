import { ChevronRight } from "lucide-react"

import {
  Button,
  ButtonIcon as DefaultButtonIcon,
} from "@/registry/default/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" icon>
      <DefaultButtonIcon icon={<ChevronRight />} />
    </Button>
  )
}
