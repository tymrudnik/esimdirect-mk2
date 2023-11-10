import { MouseEventHandler } from "react"

export interface ButtonProps {
  text: string
  dest?: string
  target?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export type DeviceType = {
  company: string
  icon: string
  phones: { name: string; link: string }[]
}
