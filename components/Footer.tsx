import { Logo } from "@/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-primary-600 pb-4 pt-14">
      <div className="flex justify-between items-center w-3/4 mx-auto">
        <div className=" basis-1/4">
          <Image src={Logo} alt="logo" className="h-20" height={80} width={80} />
        </div>
        <div className="basis-3/4 mt-0 text-right justify-end content-end">
          <p>© Esim Direct All Rights Reserved.</p>
          <h4 className="italic text-sm">
            Website built by{" "}
            <a href="https://tymrudnik.com" target="_blank" className="hover:font-bold">
              Tym Rudnik
            </a>
          </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
