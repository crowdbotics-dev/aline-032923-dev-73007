import axios from "axios"
import { RAPIDAPI_COCKTAILS_TOKEN } from "react-native-dotenv"
const rapidAPICocktails = axios.create({
  baseURL: "https://drinks-digital1.p.rapidapi.com/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${RAPIDAPI_COCKTAILS_TOKEN}`
  }
})
function rapidapicocktails_get_cocktails_read(payload) {
  return rapidAPICocktails.get(`/cocktails`, {
    params: { limit: payload.limit }
  })
}
export const apiService = { rapidapicocktails_get_cocktails_read }
