import PropTypes from "prop-types";
import { PlusIcon } from "../../components/icons";

const Footer = ({ className, onClick, isOpen }) => {
	return (
		<footer className={`${className} text-center p-4 border-t border-white`}>
			<button
				className="text-white text-4xl inline-block bg-slate-600 p-2 rounded-full hover:opacity-80 transition-all"
				onClick={onClick}
			>
				<PlusIcon className={`${isOpen ? "rotate-45 transition-all" : ""} h-8 w-8`} />
			</button>
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool,
};
export default Footer;
