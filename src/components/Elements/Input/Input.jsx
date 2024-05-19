const Input = (props) => {
	return (
		<>
			<input
				type={props.type}
				id={props.id}
				name={props.name}
				className={props.className}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</>
	);
};

export default Input;
