import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  currentSongID: JSON.parse(localStorage.getItem("audioNow")) || null,
  currentSong: null,
  currentAlbum: null,
  songs: {},
  isNext: JSON.parse(localStorage.getItem("isNext")) || false,
  isPrev: JSON.parse(localStorage.getItem("isPrev")) || false,
  trendding: [],
  isVip: false,
  isLoading: false,
  isRepeat: JSON.parse(localStorage.getItem("isRepeat")) || false,
  isShuffle: JSON.parse(localStorage.getItem("shuffle")) || false,
  history: JSON.parse(localStorage.getItem("history")) || [],
  favourite: JSON.parse(localStorage.getItem("favourite")) || [],
  dataHome: [],
  listSongNext: [],
};
export const songSlices = createSlice({
  name: "songNow",
  initialState,
  reducers: {
    checkPlay: (state, action) => {
      state.status = action.payload;
    },
    updateCurrentSong: (state, action) => {
      localStorage.setItem("audioNow", JSON.stringify(action.payload));
      state.currentSongID = action.payload;
    },
    updateCurrentSongItem: (state, action) => {
      state.currentSong = action.payload;
    },
    updateCurrentAlbumData: (state, action) => {
      state.currentAlbum = action.payload;
    },
    getListSong: (state, action) => {
      state.songs = action.payload;
    },
    updateNext: (state, action) => {
      localStorage.setItem("isNext", JSON.stringify(action.payload));
      state.isNext = action.payload;
    },
    updatePrev: (state, action) => {
      localStorage.setItem("isPrev", JSON.stringify(action.payload));
      state.isPrev = action.payload;
    },
    updateListTrend: (state, action) => {
      state.trendding = action.payload;
    },
    updateListSongNext: (state, action) => {
      state.listSongNext = action.payload;
    },
    updateIsVip: (state, action) => {
      state.isVip = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateRepeat: (state, action) => {
      localStorage.setItem("isRepeat", JSON.stringify(action.payload));
      state.isRepeat = action.payload;
    },
    updateShuffle: (state, action) => {
      localStorage.setItem("shuffle", JSON.stringify(action.payload));
      state.isShuffle = action.payload;
    },

    pushHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem("history", JSON.stringify(state.history));
    },
    pushFavourite: (state, action) => {
      state.favourite.push(action.payload);
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },
    updateDataHome: (state, action) => {
      state.dataHome = action.payload;
    },
  },
});
