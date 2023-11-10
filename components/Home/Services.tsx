import Image from "next/image"
import { Europe, Australia, China, USA } from "@/assets"
import { LinkButton } from "../Buttons"

const Services = () => {
  return (
    <section className="bg-primary-600 my-10">
      <div className="flex phone:flex-col-reverse lgx:justify-between items-center w-3/4 mx-auto my-10">
        <div>
          <div className="grid grid-cols-2 gap-2 justify-center m-6 basis-1/2 phone:pt-6">
            {/* ICON GRID */}
            <a href="https://www.tymrudnik.com" target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={Europe}
                alt="europe_flag"
                height={146}
                width={261}
              />
            </a>
            <a href="https://www.tymrudnik.com" target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={USA}
                alt="usa_flag"
                height={146}
                width={261}
              />
            </a>
            <a href="https://www.tymrudnik.com" target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={China}
                alt="china_flag"
                height={146}
                width={261}
              />
            </a>
            <a href="https://www.tymrudnik.com" target="_blank">
              <Image
                className="rounded-2xl drop-shadow-sm opacity-70 hover:drop-shadow-xl hover:opacity-100 hover:brightness-125"
                src={Australia}
                alt="australia_flag"
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
          <LinkButton text="See More" dest="http://localhost:3000" />
        </div>
      </div>
    </section>
  )
}

export default Services
