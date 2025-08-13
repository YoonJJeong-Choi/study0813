import { createSlice } from '@reduxjs/toolkit';

const themSlice = createSlice({
  name: 'theme',
  initialState: { isDark: false },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
    setDark: (state) => {
      state.isDark = true;
    },
    setLight: (state) => {
      state.isDark = false;
    },
  },
});

export default themSlice.reducer;
export const { toggleTheme, setDark, setLight } = themSlice.actions;
