import Image from "next/image"
import { HeroBackground, HeroImage } from "@/assets"
import { ScrollButton } from "../Buttons"

const Hero = () => {
  return (
    <section className="relative w-3/4 mx-auto min-h-screen flex place-content-center " style={{ zIndex: 1 }}>
      <Image className="absolute -z-10 top-0 h-full w-full" src={HeroBackground} alt="hero_grid_img" />
      <div className="flex-between phone:flex-col-reverse">
        <div className="hero-left md:basis-1/2 basis-2/5 phone:text-center">
          <h1 className="hero-title pb-10 max-w-1/4">
            The World's <br /> Most Modern <br /> E-sim <span className="text-secondary-500 hero-title">Platform</span>
          </h1>
          <div>
            <p className="pb-4">
              ESIM is a magical way to save you money when travelling abroad. Instead of using data from your current carrier, you buy a bundle from a
              local provider. No more roaming charges for using data while on vacation.
            </p>
            <ScrollButton text="Contact Us" scrollToLoc="contact-section" />
          </div>
        </div>
        <div className="basis-1/2 lg:mt-6 flex lgx:place-content-end ">
          <Image src={HeroImage} alt="hero_image" width={620}></Image>
        </div>
      </div>
    </section>
  )
}

export default Hero
