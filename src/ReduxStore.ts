import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./features/matches/MatchesManager";

export const store = configureStore({
    reducer: {
        matches: matchesReducer,
    },
});

// Types for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
