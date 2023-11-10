// Supoorted devices array
import { AppleLogo, SamsungLogo, NokiaLogo, GoogleLogo } from "@/assets"
import { DeviceType } from "@/types"

export const supportedDevicesArr: DeviceType[] = [
  {
    company: "Apple",
    icon: AppleLogo,
    phones: [
      { name: "iPhone 15", link: "https://www.apple.com/iphone-15/" },
      { name: "iPhone 14", link: "https://www.apple.com/iphone-14/" },
      { name: "iPhone SE 3", link: "https://www.apple.com/iphone-se-3/" },
      { name: "iPhone 13", link: "https://www.apple.com/iphone-13/" },
    ],
  },
  {
    company: "Google",
    icon: GoogleLogo,
    phones: [
      { name: "Pixel 6", link: "https://store.google.com/us/product/pixel_6" },
      {
        name: "Pixel 5a",
        link: "https://store.google.com/us/product/pixel_5a",
      },
      {
        name: "Pixel 4a",
        link: "https://store.google.com/us/product/pixel_4a",
      },
      { name: "Pixel 4", link: "https://store.google.com/us/product/pixel_4" },
    ],
  },
  {
    company: "Nokia",
    icon: NokiaLogo,
    phones: [
      { name: "Pixel 6", link: "https://store.google.com/us/product/pixel_6" },
      {
        name: "Pixel 5a",
        link: "https://store.google.com/us/product/pixel_5a",
      },
      {
        name: "Pixel 4a",
        link: "https://store.google.com/us/product/pixel_4a",
      },
      { name: "Pixel 4", link: "https://store.google.com/us/product/pixel_4" },
    ],
  },
  {
    company: "Samsung",
    icon: SamsungLogo,
    phones: [
      { name: "Pixel 6", link: "https://store.google.com/us/product/pixel_6" },
      {
        name: "Pixel 5a",
        link: "https://store.google.com/us/product/pixel_5a",
      },
      {
        name: "Pixel 4a",
        link: "https://store.google.com/us/product/pixel_4a",
      },
      { name: "Pixel 4", link: "https://store.google.com/us/product/pixel_4" },
    ],
  },
]
