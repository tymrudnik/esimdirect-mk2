import { MouseEventHandler, ReactComponentElement } from "react"

export interface ButtonProps {
  text: string
  dest?: string
  target?: string
  scrollToLoc?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface DeviceType {
  company: string
  icon: string
  phones: { name: string; link: string }[]
}

export interface AboutType {
  title: string
  body: JSX.Element
}
