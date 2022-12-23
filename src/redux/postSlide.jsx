import { createSlice } from "@reduxjs/toolkit";

const postSlide = createSlice({
	name: "post",
	initialState: {
		posts: [{ title: "Hello world", desc: "This is a post", theme: "#f472b6", label: "Love" }],
		loadingPost: false,
	},
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload);
		},
		deletePost: (state, action) => {
			state.posts.splice(action.payload, 1);
		},
	},
});

export const { addPost, deletePost } = postSlide.actions;
const postReducer = postSlide.reducer;
export default postReducer;
