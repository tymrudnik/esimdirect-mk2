import Image from "next/image"
import { Europe, Turkiye, UnitedKingdom, USA } from "@/assets"
import { LinkButton } from "../Buttons"

const Services = () => {
  const link = "https://www.getnomad.app/?rfsn=7643611.afb60e"
  const eurLink = "https://www.ebay.co.uk/itm/395425917316"
  const usaLink = "https://www.ebay.co.uk/itm/395414992855"
  const turLink = "https://www.ebay.co.uk/itm/395488986979"
  const ukLink = "https://www.ebay.co.uk/itm/395463288878"

  return (
    <section className="bg-primary-600 my-10">
      <div className="flex phone:flex-col-reverse lgx:justify-between items-center w-3/4 mx-auto my-10">
        <div>
          <div className="grid grid-cols-2 gap-2 justify-center m-6 basis-1/2 phone:pt-6">
            {/* ICON GRID */}
            <a href={eurLink} target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={Europe}
                alt="europe_flag"
                height={146}
                width={261}
              />
            </a>
            <a href={usaLink} target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={USA}
                alt="usa_flag"
                height={146}
                width={261}
              />
            </a>
            <a href={turLink} target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={Turkiye}
                alt="turkiye_flag"
                height={146}
                width={261}
              />
            </a>
            <a href={ukLink} target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={UnitedKingdom}
                alt="united_kingdom_flag"
                height={146}
                width={261}
              />
            </a>
          </div>
        </div>
        <div className="basis-1/2 lgx:ml-6 text-right phone:text-center">
          <h1 className="pb-6">
            Browse our <br /> services & <br /> <span className="text-secondary-500">offerings</span>
          </h1>
          <p className="pb-4">Click on the region you wish to travel to and see what we have to offer.</p>
          {/* <LinkButton text="See More" dest={link} /> */}
        </div>
      </div>
    </section>
  )
}

export default Services
