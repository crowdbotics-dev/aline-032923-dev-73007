import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const rapidapicocktails_get_cocktails_list = createAsyncThunk(
  "rapidapicocktails_response_get_Cocktails/rapidapicocktails_get_cocktails_list",
  async payload => {
    const response = await apiService.rapidapicocktails_get_cocktails_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const rapidapicocktails_response_get_CocktailsSlice = createSlice({
  name: "rapidapicocktails_response_get_Cocktails",
  initialState,
  reducers: {},
  extraReducers: {
    [rapidapicocktails_get_cocktails_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rapidapicocktails_get_cocktails_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [rapidapicocktails_get_cocktails_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  rapidapicocktails_get_cocktails_list,
  slice: rapidapicocktails_response_get_CocktailsSlice
}
