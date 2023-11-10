import DeviceList from "../DeviceList"

const SupportedDevices = () => {
  return (
    <section>
      <div className="w-3/4 mx-auto py-6">
        <div className="text-center">
          <h1>Supported Devices</h1>
          <h4 className="font-semibold">
            Save money and use your phone abroad like a <span className="text-secondary-500 font-semibold">native</span>
          </h4>
          <p className="text-xs italic pb-4">
            * The lists below represent a sample of devices for full list{" "}
            <span>
              <a
                className="hover:font-bold text-secondary-500"
                href="https://www.techradar.com/pro/how-to-check-if-your-phone-supports-esim"
                target="_blank"
              >
                Click Here
              </a>
            </span>
          </p>
        </div>
        <div>
          <DeviceList />
        </div>
      </div>
    </section>
  )
}

export default SupportedDevices
