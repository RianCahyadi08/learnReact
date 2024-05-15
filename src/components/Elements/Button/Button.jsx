const Button = (props) => {
	const {
		type = ['submit, button'],
		classValue = 'w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300',
		name,
	} = props;
	return (
		<>
			<button type={type} className={classValue}>
				{name}
			</button>
		</>
	);
};

export default Button;
