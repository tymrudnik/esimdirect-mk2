"use client"

import Image from "next/image"
import { HeroBackground, HeroImage } from "@/assets"
import useMediaQuery from "@/hooks/useMediaQuery"

const Hero = () => {
  const scrollTo = (section: string) => {
    const Section = document.getElementById(section)
    if (Section) {
      Section.scrollIntoView({ behavior: "smooth" })
    }
  }
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const heroStyles = isAboveMediumScreens ? "flex-between" : "flex-col pt-20"
  return (
    <section className={`relative w-3/4 mx-auto min-h-screen ${heroStyles} `} style={{ zIndex: 1 }}>
      <Image className="absolute -z-10 top-0 h-full w-full" src={HeroBackground} alt="hero_grid_img" layout="fill" />
      {isAboveMediumScreens ? (
        <>
          <div className="hero-left md:basis-1/2 basis-2/5">
            <h1 className="hero-title pb-10 max-w-1/4">
              The World's <br /> Most Modern <br /> E-sim <span className="text-secondary-500 hero-title">Platform</span>
            </h1>

            <div>
              <p className="pb-4">
                ESIM is a magical way to save you money when travelling abroad. Instead of using data from your current carrier, you buy a bundle from
                a local provider. No more roaming charges for using data while on vacation.
              </p>
              <button
                className="inline-flex items-center py-2 px-6 bg-secondary-500 hover:bg-secondary-600 font-bold text-dark-100"
                onClick={() => scrollTo("contact-section")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="basis-1/2 lg:mt-6 flex lgx:place-content-end ">
            <Image src={HeroImage} alt="hero_image" width={620}></Image>
          </div>
        </>
      ) : (
        <>
          <div className="basis-1/2 lg:mt-6 flex lgx:place-content-end pb-10">
            <Image src={HeroImage} alt="hero_image" width={620}></Image>
          </div>
          <div className="hero-left md:basis-1/2 basis-2/5 ">
            <h1 className="hero-title pb-10 max-w-1/4">
              The World's <br /> Most Modern <br /> E-sim <span className="text-secondary-500 hero-title">Platform</span>
            </h1>

            <div>
              <p className="pb-4">
                ESIM is a magical way to save you money when travelling abroad. Instead of using data from your current carrier, you buy a bundle from
                a local provider. No more roaming charges for using data while on vacation.
              </p>
              <button
                className="inline-flex items-center py-2 px-6 bg-secondary-500 hover:bg-secondary-600 font-bold text-dark-100"
                onClick={() => scrollTo("contact-section")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Hero
