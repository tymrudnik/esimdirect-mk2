"use client"

import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import useMediaQuery from "../hooks/useMediaQuery"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

const Navbar = ({}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const navbarBackground = isTopOfPage ? "" : "bg-primary-600 drop-shadow "

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <>
      <nav className={`${navbarBackground} flex-between fixed top-0 z-30 w-full h-20`}>
        <div className="mx-auto w-3/4 py-6 flex-between">
          <div className="basis-3/4 flex gap-4 items-center">
            <Link className="text-lg" href="/">
              Esim Direct
            </Link>
          </div>
          {isAboveMediumScreens ? (
            <div className="md:basis-2/4 ">
              <ul className="flex items-end justify-end">
                <li className="text-sm ">
                  <Link href="/coming-soon" className="flex items-center gap-2">
                    Sign Up
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="justify-self-end p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaBars />
            </button>
          )}
        </div>
        {/* MOBILE MENU */}
      </nav>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-primary-600">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaXmark />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[25%] flex flex-col text-2xl pr-5">
            <ul>
              <li className="py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2">
                <p className="italic">Coming Soon...</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
