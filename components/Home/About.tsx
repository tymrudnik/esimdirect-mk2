"use client"

import { Accordion, AccordionItem } from "@nextui-org/react"

const About = () => {
  return (
    <section className="bg-primary-600 py-6">
      <div className="w-3/4 mx-auto flex-col items-center">
        <div className="">
          <h1 className="pb-8 text-center">Need more info? Keep reading.</h1>
          <Accordion className="w-full">
            <AccordionItem className="transition-height duration-500 ease-in-out" title="What is eSIM?">
              <p>
                An eSIM is a digital SIM card. It's a small chip embedded in your device and can be programmed to act like a traditional SIM card. The
                main advantage is that it can be reprogrammed with different carrier profiles, which allows users to switch network providers without
                needing to physically swap out a SIM card.
              </p>
            </AccordionItem>
            <AccordionItem className="transition-height duration-500 ease-in-out" title="How Does It Work?">
              <ul className="list-disc">
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Profile Storage: </span>
                    An eSIM can store multiple carrier profiles, but only one can be active at a time. This makes it easier for users to switch
                    between carriers or plans.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Activation and Switching: </span>
                    When you want to activate an eSIM or switch profiles, you'll typically use the device's software. For instance, on a smartphone,
                    there would be an option in the settings to manage eSIM profiles.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">QR Code Scanning: </span>
                    Typically, when you sign up for a new plan with a carrier that supports eSIM, they might provide a QR code. Scanning this QR code
                    with the device's camera can download the carrier's profile and set it up on the eSIM.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Remote Provisioning: </span>
                    eSIM technology supports remote provisioning, which means carriers can update or change their profiles without any physical
                    interaction needed from the user's end.
                  </p>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem className="transition-height duration-500 ease-in-out" title="Benefits of eSIM">
              <ul className="list-disc">
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Flexibility: </span>
                    Users can switch between carriers or plans more easily, without needing a new physical SIM card.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Space-Saving: </span>
                    No need for a SIM card slot, which can help make devices smaller or free up space for other components.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Ideal for IoT: </span>
                    eSIMs are especially useful for the Internet of Things (IoT) devices, where it might be impractical to use physical SIM cards.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Travel: </span>
                    For frequent travelers, eSIM can be a boon. They can simply download the profile for a local carrier in the country they're
                    visiting rather than buying a local SIM card.
                  </p>
                </li>
                <li>
                  <p className="pb-4 leading-tight">
                    <span className="font-bold text-lg text-secondary-500">Durability: </span>
                    No need for a physical SIM card slot can mean fewer openings and potentially increased water and dust resistance.
                  </p>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default About
