import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import keychainStorage from "../utils/keyChainStorage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: keychainStorage,
    whitelist: ['userAuth'], // only persist the 'auth' reducer
};

const rootReducer = combineReducers({
    userAuth: authReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(reduxStore);