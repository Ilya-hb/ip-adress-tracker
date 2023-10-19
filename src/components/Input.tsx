import { FiChevronRight } from "react-icons/fi"

export default function Input() {
  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        name=""
        id=""
        className="outline-none px-5 py-4 w-1/2 min-[400px]:max-w-md max-[400px]:w-full rounded-l-xl"
        placeholder="Search for any IP address or domain"
      />
      <button className="p-4 rounded-r-xl bg-black text-white text-2xl">
        <FiChevronRight className="hover:translate-x-3 transition-all" />
      </button>
    </div>
  )
}
