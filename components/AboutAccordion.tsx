"use client"

import { AboutType } from "@/types"
import { Accordion, AccordionItem } from "@nextui-org/accordion"

type AboutAccordionProps = {
  data: AboutType[]
}

export default function AboutAccordion({ data }: AboutAccordionProps) {
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem key={item.title} title={item.title}>
          {item.body}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
