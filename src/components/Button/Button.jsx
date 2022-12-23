const Button = ({ children, onClick }) => {
	return (
		<button
			className="absolute top-3 right-3 border-[3px] border-white rounded-md p-1 z-10 hover:scale-95 transition-all active:bg-slate-600"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
