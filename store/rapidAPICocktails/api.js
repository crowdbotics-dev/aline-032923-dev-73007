import axios from "axios"
import {} from "react-native-dotenv"
const rapidAPICocktails = axios.create({
  baseURL: "https://drinks-digital1.p.rapidapi.com/v1/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rapidapicocktails_get_cocktails_list(payload) {
  return rapidAPICocktails.get(`/cocktails`, {
    params: { limit: payload.limit }
  })
}
export const apiService = { rapidapicocktails_get_cocktails_list }
