import { createSlice } from "@reduxjs/toolkit";
import { contentCardData } from "../../constants/contentData";

const initialState = contentCardData;

const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {},
});

// export const {} = contentSlice.actions;
export default contentSlice.reducer;
