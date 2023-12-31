import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Location } from "../types"
import Loader from "./Loader"
interface IpInfoProps {
  type: "IP ADRESS" | "LOCATION" | "TIMEZONE" | "ISP"
}

const IpInfo: React.FC<IpInfoProps> = ({ type }) => {
  const ipData = useSelector((state: RootState) => state.map.ipData)
  const isLoading = useSelector(
    (state: RootState) => state.map.status === "loading",
  )

  const getInfo = (): string => {
    switch (type) {
      case "IP ADRESS":
        return ipData?.ip || "N/A"
      case "LOCATION":
        return getLocationString(ipData?.location)
      case "TIMEZONE":
        return ipData?.location.timezone || "N/A"
      case "ISP":
        return ipData?.isp || "N/A"
      default:
        return "N/A"
    }
  }

  const getLocationString = (location: Location | undefined): string => {
    if (!location) return "N/A"
    return `${location.city}, ${location.region}, ${location.country}`
  }

  return (
    <div className="">
      <h2 className="text-gray-400 font-medium text-xs md:text-sm text ">
        {type}
      </h2>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <Loader />
        </div>
      ) : (
        <p className="text-xl md:text-3xl font-medium text-black line-clamp-2 md:line-clamp-3">
          {getInfo()}
        </p>
      )}
    </div>
  )
}

export default IpInfo
