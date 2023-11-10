// mapSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState} from "../../app/store";
import { fetchIPData } from "./mapAPI";
import { IPData } from "../../types";

export interface MapState {
  ipData: IPData | null;
  status: "idle" | "loading" | "failed";
}

const initialState: MapState = {
  ipData: null,
  status: "idle",
};

export const fetchIPDataAsync = createAsyncThunk(
  'map/fetchIPData',
  async (ip: string) => {
    const response = await fetchIPData(ip);
    return response;
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIPDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIPDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.ipData = action.payload;
      })
      .addCase(fetchIPDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectIPData = (state: RootState) => state.map.ipData;

export default mapSlice.reducer;
