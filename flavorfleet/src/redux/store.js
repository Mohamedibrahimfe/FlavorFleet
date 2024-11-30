import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice"; // Import the new search slice

// Redux Persist configuration
const persistConfig = {
  key: "root", // Key for storage
  storage, // Define the storage engine
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure the store
const store = configureStore({
  reducer: {
    cart: persistedReducer,
    search: searchReducer, // Add the search reducer
  },
});

// Create a persistor to control persistence
export const persistor = persistStore(store);

export default store;
