import { useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { useAppDispatch } from "../app/hooks"
import { fetchIPDataAsync } from "../features/map/mapSlice"
//TODO: ADD VERIFICATION IP ADRESS REGEX AND ERROR MESSAGE

export default function Input() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useAppDispatch()
  const [isValidInput, setIsValidInput] = useState(true)

  const isValidIpAddress = (ipAddress: string) => {
    const ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/
    return ipRegex.test(ipAddress)
  }
  const handleSearch = () => {
    const isValid = isValidIpAddress(inputValue)
    setIsValidInput(isValid) // Update validity state
    setInputValue("")
    if (isValid) {
      dispatch(fetchIPDataAsync(inputValue))
      const ipToSearch = inputValue.trim() === "" ? "" : inputValue
      dispatch(fetchIPDataAsync(ipToSearch))
    } else {
      console.error("Invalid IP address format")
    }
  }

  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`outline-none px-5 py-4 w-1/2 min-[400px]:max-w-md max-[500px]:w-full rounded-l-xl transition-all ${
          isValidInput ? "" : "bg-red-400 text-white placeholder-white"
        }`}
        placeholder={`${
          isValidInput
            ? "Search for any IP address or domain"
            : "Please enter valid IP address"
        } `}
      />
      <button
        className="p-4 rounded-r-xl bg-black text-white text-2xl hover:bg-slate-800 transition"
        onClick={handleSearch}
      >
        <FiChevronRight className="hover:translate-x-3 transition-all" />
      </button>
    </div>
  )
}
