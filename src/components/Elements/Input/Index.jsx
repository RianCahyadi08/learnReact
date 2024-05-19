import Input from './Input';
import Label from './Label';

const InputForm = (props) => {
	return (
		<>
			<div class='mb-4'>
				<Label htmlFor={props.htmlFor}>{props.children}</Label>
				<Input
					name={props.name}
					type={props.type}
					id={props.id}
					className={props.className}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
		</>
	);
};

export default InputForm;
