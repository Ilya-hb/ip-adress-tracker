import "leaflet/dist/leaflet.css"
import "./App.css"
import Input from "./components/Input"
import IpInfo from "./components/IpInfo"
import MapLayer from "./components/MapLayer"

function App() {
  return (
    <div className="h-screen">
      <section className="h-3/6 md:h-2/6 relative bg-[url('./assets/images/pattern-bg-desktop.png')] bg-no-repeat bg-cover flex items-center flex-col pt-3 md:pt-10 z-10">
        <div className="flex justify-center items-center w-full px-2 flex-col space-y-9">
          <h1 className="text-white text-3xl font-medium">
            IP Address Tracker
          </h1>
          <Input />
        </div>
        <div className="absolute -bottom-0 translate-y-2/4 bg-white p-8 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 lg:gap-8 rounded-3xl w-11/12 max-w-7xl shadow-lg text-center md:text-left break-words">
          <div className="md:border-r border-gray-500">
            <IpInfo type="IP ADRESS" />
          </div>
          <div className="md:border-r border-gray-500">
            <IpInfo type="LOCATION" />
          </div>
          <div className="md:border-r border-gray-500">
            <IpInfo type="TIMEZONE" />
          </div>
          <IpInfo type="ISP" />
        </div>
      </section>
      <section className="h-3/6 md:h-4/6">
        <MapLayer />
      </section>
    </div>
  )
}

export default App
