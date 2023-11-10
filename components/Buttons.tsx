"use client"
import Link from "next/link"

import { ButtonProps } from "@/types"

export const LinkButton = ({ text, dest, target }: ButtonProps) => {
  return (
    <Link
      href={dest || "/"}
      target={target}
      className="inline-flex items-center py-2 px-6 bg-secondary-500 hover:bg-secondary-600 font-bold text-dark-100"
    >
      {text}
    </Link>
  )
}

export const ActionButton = ({ text, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className="inline-flex items-center py-2 px-6 bg-secondary-500 hover:bg-secondary-600 font-bold text-dark-100">
      {text}
    </button>
  )
}
