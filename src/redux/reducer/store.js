import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./handleUsers";

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
});

// export default store;