import { createSlice } from "@reduxjs/toolkit";
import { contentCardData } from "../../constants/contentData";
import { generateRandomContentCard } from "../../utils/contentGenerator";

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
    addURLToVideo: (state) => {
      const newCard = generateRandomContentCard(state, 1);
      console.log(newCard);

      state.push(newCard);
    },
    addTextToVideo: (state) => {
      const newCard = generateRandomContentCard(state, 2);
      state.push(newCard);
    },
    addSpeechToVideo: (state) => {
      const newCard = generateRandomContentCard(state, 3);
      state.push(newCard);
    },
    addAIAvatar: (state) => {
      const newCard = generateRandomContentCard(state, 4);
      state.push(newCard);
    },
    addRandomVideo: (state) => {
      const randomNum = Math.floor(Math.random() * 4) + 1;
      const newCard = generateRandomContentCard(state, randomNum);
      state.push(newCard);
    },
  },
});

export const {
  changePinned,
  addAIAvatar,
  addSpeechToVideo,
  addTextToVideo,
  addURLToVideo,
  addRandomVideo,
} = contentSlice.actions;
export default contentSlice.reducer;
