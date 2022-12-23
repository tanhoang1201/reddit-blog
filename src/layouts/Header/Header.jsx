import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Button from "../../components/Button";

const Header = ({ onClick }) => {
	const userInfo = useSelector((state) => state.user.profile);
	return (
		<header
			className="relative pt-[50%] text-white border-b border-b-white"
			style={{ backgroundColor: `${userInfo.theme}` }}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,0,0,0.8)] to-[rgba(0,0,0,0.01)] "></div>
			<Button onClick={onClick}>Edit Profile</Button>
			<div className="absolute left-3 bottom-3 top-3 flex gap-3">
				<div>
					<img className="w-full h-full rounded-md" src={userInfo.avatar} alt="" />
				</div>
				<div className="self-end">
					<h2 className="font-semibold text-lg">{userInfo.name}</h2>
					<span>{userInfo.age}</span>
					<p>{userInfo.about}</p>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Header;
