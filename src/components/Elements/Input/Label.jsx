const Label = (props) => {
	// const { htmlFor, classValue = 'block text-gray-600', children } = props;
	return (
		<>
			<label htmlFor={props.htmlFor} className={props.className}>
				{props.children}
			</label>
		</>
	);
};

export default Label;
