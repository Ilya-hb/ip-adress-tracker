import { IPData } from "../../types"
import axios from "axios"

const IP_GEOLOCATION_API_URL = "https://geo.ipify.org";
const GEO_IPIFY_KEY = import.meta.env.VITE_GEO_IPIFY_KEY;

export const fetchIPData = async (ip: string): Promise<IPData> => {
  try {
    const response = await axios.get(
      `${IP_GEOLOCATION_API_URL}/api/v2/country,city?apiKey=${GEO_IPIFY_KEY}&ipAddress=${ip}`,
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}
