import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import { editProfile } from "../../redux/userSlide";

const avatars = [
	"https://preview.redd.it/coupmnvtixh61.png?auto=webp&s=d243ec2e22c435f455f06d8672f297cea98529f5",
	"https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
	"https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
	"https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79",
	"https://preview.redd.it/vl1a9jcmrtv51.png?auto=webp&s=9171f7620ac0c4d75eddde2e87a99dafdf16ee57",
	"https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
];

const Edit = ({ onClick }) => {
	const userInfo = useSelector((state) => state.user.profile);
	const dispatch = useDispatch();
	const [info, setInfo] = useState({
		name: userInfo.name,
		age: userInfo.age,
		about: userInfo.about,
		theme: userInfo.theme,
	});
	const [avatar, setAvatar] = useState(userInfo.avatar);
	const [imgIndex, setIndex] = useState(0);

	const handleInputChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handlePickAvatar = (e, index) => {
		setAvatar(e.target.src);
		setIndex(index);
	};

	const handleSave = () => {
		onClick();
		dispatch(
			editProfile({
				...info,
				avatar,
			})
		);
	};

	return (
		<section className="absolute inset-0 bg-slate-800 z-20 text-white p-3">
			<Button onClick={handleSave}>Save</Button>
			<h2 className="font-semibold text-lg text-center mt-12">Edit Profile</h2>
			<InputGroup
				label="Display Name"
				name="name"
				placeholder={userInfo.name}
				onChange={handleInputChange}
			/>
			<InputGroup label="Age" name="age" placeholder={userInfo.age} onChange={handleInputChange} />
			<InputGroup
				label="About"
				name="about"
				placeholder={userInfo.about}
				elementType="textarea"
				onChange={handleInputChange}
			/>
			<label htmlFor="" className="mt-10 mb-3 block text-sm">
				Profile picture
			</label>
			<div className="grid grid-cols-4 gap-3  mb-10 ">
				{avatars.map((avatar, index) => (
					<button key={index} className="hover:-translate-y-1 transition-all">
						<img
							src={avatar}
							alt=""
							onClick={(e) => handlePickAvatar(e, index)}
							className={`${
								imgIndex === index ? "scale-[120%] border-b-2 border-white" : ""
							} transition-all`}
						/>
					</button>
				))}
			</div>
			<div className="">
				<span className="block text-sm">Theme</span>
				<div className="text-center">
					<input
						type="color"
						defaultValue={userInfo.theme}
						name="theme"
						className="rounded-md"
						onChange={handleInputChange}
					/>
				</div>
			</div>
		</section>
	);
};

Edit.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Edit;
