import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useAppDispatch } from "../app/hooks";
import { fetchIPDataAsync } from "../features/map/mapSlice";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    // Dispatch the first thunk to get information based on the input value
    dispatch(fetchIPDataAsync(inputValue));

    // If the input value is empty, use the current IP address
    const ipToSearch = inputValue.trim() === "" ? "" : inputValue;

    // Dispatch the second thunk to get information based on the current IP address
    dispatch(fetchIPDataAsync(ipToSearch));
  };

  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="outline-none px-5 py-4 w-1/2 min-[400px]:max-w-md max-[500px]:w-full rounded-l-xl"
        placeholder="Search for any IP address or domain"
      />
      <button
        className="p-4 rounded-r-xl bg-black text-white text-2xl hover:bg-slate-800 transition"
        onClick={handleSearch}
      >
        <FiChevronRight className="hover:translate-x-3 transition-all" />
      </button>
    </div>
  );
}
