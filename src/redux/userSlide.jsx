import { createSlice } from "@reduxjs/toolkit";

const userSlide = createSlice({
	name: "user",
	initialState: {
		profile: {
			avatar:
				"https://preview.redd.it/coupmnvtixh61.png?auto=webp&s=d243ec2e22c435f455f06d8672f297cea98529f5",

			name: "TanBom1201",
			age: "23",
			about: "I'm a frontend developer",
			theme: "#facc15",
		},
		loadingUser: false,
	},

	reducers: {
		editProfile: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const { editProfile } = userSlide.actions;
const userReducer = userSlide.reducer;
export default userReducer;
