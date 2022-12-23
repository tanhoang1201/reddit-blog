import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/postSlide";

import { CloseIcon } from "../icons";

const PostItem = ({ post, index }) => {
	const dispatch = useDispatch();
	const handleDelPost = () => {
		dispatch(deletePost(index));
	};
	return (
		<div className="text-white p-5">
			<div
				className="rounded-md p-3 relative"
				style={{ backgroundColor: `${post.theme}4D`, border: `1px solid ${post.theme}` }}
			>
				<div className="flex items-center gap-4 mb-1">
					<h3 className="font-bold">{post.title}</h3>
					<span className="px-1 py-[2px] rounded-lg" style={{ backgroundColor: `${post.theme}` }}>
						{post.label}
					</span>
				</div>
				<p className="text-sm">{post.desc}</p>
				<button
					className="absolute right-3 top-1/2 -translate-y-1/2 hover:scale-110"
					onClick={handleDelPost}
				>
					<CloseIcon />
				</button>
			</div>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	index: PropTypes.number,
};

export default PostItem;
