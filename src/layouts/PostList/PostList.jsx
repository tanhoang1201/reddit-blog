import PostItem from "../../components/PostItem/PostItem";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

const PostList = ({ className }) => {
	const posts = useSelector((state) => state.post.posts);

	return (
		<section className={`${className}`} style={{ overflow: "overlay" }}>
			{posts.map((post, index) => (
				<PostItem post={post} key={v4()} index={index} />
			))}
		</section>
	);
};

export default PostList;
