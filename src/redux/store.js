import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import navReducer from './navSlice';
import loginReducer from './memberSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
    member: loginReducer,
  },
});

export default store;
