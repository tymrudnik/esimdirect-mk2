import Device from "./Device"
import { supportedDevicesArr } from "../data/supportedDevicesArr"

const DeviceList = () => {
  return (
    <div className="grid lgx:grid-cols-4 lg:grid-cols-2 justify-items-center pt-6">
      {supportedDevicesArr.map((device) => (
        <Device key={device.company} device={device} />
      ))}
    </div>
  )
}

export default DeviceList
