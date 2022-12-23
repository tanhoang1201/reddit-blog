import PropTypes from "prop-types";

const InputGroup = ({ label, placeholder, name, className, elementType = "input", onChange }) => {
	let Com = elementType;
	return (
		<div className={`${className} flex flex-col gap-1 mb-3`}>
			<label htmlFor={name} className="text-sm font-medium">
				{label}
			</label>
			<Com
				type="text"
				spellCheck
				onChange={onChange}
				placeholder={placeholder}
				id={name}
				name={name}
				className="rounded-sm px-1 py-[2px] text-gray-800 outline-none"
			/>
		</div>
	);
};

InputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	elementType: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default InputGroup;
