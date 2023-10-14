import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  authReducer  from '../redux/authSlice';
import  ploReducer  from '../redux/ploSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persisConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ auth: authReducer, plo: ploReducer });
const persistedReducer = persistReducer(persisConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store);