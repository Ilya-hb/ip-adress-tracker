import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchIPDataAsync } from "../features/map/mapSlice"
import Loader from "./Loader"

export default function MapLayer() {
  const dispatch = useAppDispatch()
  const ipData = useAppSelector((state) => state.map.ipData)
  const [center, setCenter] = useState<[number, number] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchIPDataAsync(""))
    }

    fetchData()
  }, [dispatch])

  useEffect(() => {
    console.log(ipData)
    if (ipData?.location) {
      const { lat, lng } = ipData.location
      setCenter([lat, lng])
    }
  }, [ipData])

  useEffect(() => {
    console.log("New Center:", center)
  }, [center])

  if (!center) {
    return <Loader />
  }

  return (
    <>
      <MapContainer
        key={`${center[0]}-${center[1]}`}
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <Marker position={center}>
          <Popup>
            You live in this city!
          </Popup>
        </Marker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  )
}
