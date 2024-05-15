import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';
const FormRegister = () => {
	return (
		<>
			<form action='#' method='POST'>
				<InputForm
					htmlFor='username'
					name='username'
					id='username'
					type='text'
					className='w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400'
					placeholder='Michael Jordan'>
					Username
				</InputForm>
				<InputForm
					htmlFor='email'
					name='email'
					id='email'
					type='email'
					className='w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400'
					placeholder='example@gmail.com'>
					Email
				</InputForm>
				<InputForm
					htmlFor='password'
					name='password'
					id='password'
					type='password'
					className='w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400'
					placeholder='**********'>
					Password
				</InputForm>
				<InputForm
					htmlFor='confirm-password'
					name='confirmPassword'
					id='confirm-password'
					type='password'
					className='w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400'
					placeholder='**********'>
					Confirm Password
				</InputForm>
				<Button
					type='submit'
					classNameName='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'
					name='Sign Up'
				/>
			</form>
		</>
	);
};

export default FormRegister;
