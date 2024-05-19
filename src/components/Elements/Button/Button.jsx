const Button = (props) => {
	const {
		type = 'button',
		// classValue = 'w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300',
		// name,
	} = props;
	return (
		<>
			<button type={type} className={props.className} onClick={props.onClick}>
				{props.name}
			</button>
		</>
	);
};

export default Button;
