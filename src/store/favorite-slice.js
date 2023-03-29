import { configureStore, createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, payload) {
      state.favorites.push(payload)
    },
    removeFavorite(state, payload) {
      state.favorites = state.favorites.filter(
        (item) => item.payload.stationName !== payload
      )
    },
  },
})

const store = configureStore({
  reducer: favoriteSlice.reducer,
})

export const favoriteActions = favoriteSlice.actions
export default store
