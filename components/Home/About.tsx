import { esimAbout } from "@/data/esimAbout"
import AboutAccordion from "../AboutAccordion"
import { AboutType } from "@/types"

const About = () => {
  const data = esimAbout as AboutType[]
  return (
    <section className="bg-primary-600 py-6">
      <div className="w-3/4 mx-auto flex-col items-center">
        <div className="">
          <h1 className="pb-8 text-center">Need more info? Keep reading.</h1>
        </div>
        <AboutAccordion data={data} />
      </div>
    </section>
  )
}

export default About
