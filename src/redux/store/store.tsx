import { configureStore } from "@reduxjs/toolkit";
import { guideSlice } from "../slices/guide_slice";
// Configure the store
const store = configureStore({
  reducer: {
    guides: guideSlice.reducer,
  },
});

// Export the store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
