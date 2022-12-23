import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup";
import { addPost } from "../../redux/postSlide";

const tags = [
	{ label: "None", theme: "#a3a3a3" },
	{ label: "NSFW", theme: "#dc2626" },
	{ label: "Mood", theme: "#2563eb" },
	{ label: "Quotes", theme: "#c084fc" },
	{ label: "Shit", theme: "#facc15" },
];

const Post = ({ className, onClick }) => {
	const [tagIndex, setIndex] = useState(0);
	const [content, setContent] = useState({ title: "", desc: "" });
	const [tagType, setTag] = useState(tags[0]);

	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setContent({ ...content, [e.target.name]: e.target.value });
	};

	const handleTagChange = (index, tag) => {
		setIndex(index);
		setTag({ ...tagType, ...tag });
	};

	const handlePost = () => {
		onClick();
		if (content.title !== "") {
			dispatch(addPost({ ...content, ...tagType }));
		}
	};

	return (
		<section className={`${className} relative text-white p-3`}>
			<Button onClick={handlePost}>Post</Button>
			<InputGroup
				label="Title"
				name="title"
				placeholder="Add a title..."
				className="mt-12"
				onChange={handleInputChange}
			/>
			<InputGroup
				label="Description"
				name="desc"
				placeholder="Description..."
				elementType="textarea"
				onChange={handleInputChange}
			/>
			<label htmlFor="" className="mb-4 text-sm block">
				Tags
			</label>
			<div className="flex justify-between">
				{tags.map((tag, index) => (
					<button
						key={index}
						className={`rounded-lg p-1 hover:-translate-y-[2px] transition-all ${
							tagIndex === index ? "shadow-bxs" : ""
						}`}
						style={{ backgroundColor: `${tag.theme}` }}
						onClick={() => handleTagChange(index, tag)}
					>
						{tag.label}
					</button>
				))}
			</div>
		</section>
	);
};

Post.propTypes = {
	className: PropTypes.string,
};
export default Post;
