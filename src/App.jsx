import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Edit from "./layouts/Edit";
import Post from "./layouts/Post";
import { useState } from "react";
import PostList from "./layouts/PostList/PostList";

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
