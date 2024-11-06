import { createSlice } from "@reduxjs/toolkit";
import { contentCardData } from "../../constants/contentData";

const initialState = contentCardData;

const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {
    changePinned: (state, action) => {
      const { id } = action.payload;
      const contentCard = state.find((card) => card.id === id);
      if (contentCard) {
        contentCard.pinned = !contentCard.pinned;
      }
    },
  },
});

export const { changePinned } = contentSlice.actions;
export default contentSlice.reducer;
