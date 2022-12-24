import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Edit from "./layouts/Edit";
import Post from "./layouts/Post";
import { useState } from "react";
import PostList from "./layouts/PostList/PostList";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAAjBNUvTGJ_eeu0tChZWcaStF6oZgKgFw",
	authDomain: "reddit-blog.firebaseapp.com",
	projectId: "reddit-blog",
	storageBucket: "reddit-blog.appspot.com",
	messagingSenderId: "218072804302",
	appId: "1:218072804302:web:1a64864b984048b099999f",
	measurementId: "G-33023WXE42",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	const [isShowEdit, setShowEdit] = useState(false);
	const [isShowPost, setShowPost] = useState(false);
	const handleSetShowEdit = () => {
		setShowEdit(!isShowEdit);
	};
	const handleSetShowPost = () => {
		setShowPost(!isShowPost);
	};
	return (
		<div>
			<div className="w-[350px] rounded-lg overflow-hidden shadow-lg mx-auto mt-10 h-[90vh] border bg-slate-800 flex flex-col relative">
				<Header onClick={handleSetShowEdit} />
				{isShowEdit && <Edit onClick={handleSetShowEdit} />}
				{isShowPost && <Post className="flex-1" onClick={handleSetShowPost} />}
				{!isShowPost && <PostList className="flex-1" />}
				<Footer className="mt-auto" onClick={handleSetShowPost} isOpen={isShowPost} />
			</div>
		</div>
	);
}

export default App;
