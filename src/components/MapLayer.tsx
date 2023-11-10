import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchIPDataAsync } from "../features/map/mapSlice";

export default function MapLayer() {
  const dispatch = useAppDispatch();
  const ipData = useAppSelector((state) => state.map.ipData);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchIPDataAsync(""));
    };

    fetchData();
  }, [dispatch]);
  console.log(ipData);
  
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}
