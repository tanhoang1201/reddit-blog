import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlide";
import postReducer from "./postSlide";

const store = configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
	},
});

export default store;
