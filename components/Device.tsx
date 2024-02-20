"use client"

import Image from "next/image"
import { useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { DeviceType } from "@/types"

type DeviceProps = {
  device: DeviceType
}

const Device: React.FC<DeviceProps> = ({ device }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <Image src={device.icon} alt={device.company} height={100} width={100} />
      <div className="flex justify-between">
        <h2 className="text-center text-secondary-500 py-2">{device.company}</h2>
        <button onClick={toggleVisibility}>
          <AiOutlineDown />
        </button>
      </div>

      {isVisible && (
        <ul>
          {device.phones.map((phone) => (
            <li className="py-1 device-list" key={phone.name}>
              <a className="phone-link" href={phone.link} target="_blank">
                {phone.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Device

/* I am working on a solution where I have 4 logos of different companies and a list of supported devices below the logo. Using Next.js and TailwindCSS how can I make a  */
