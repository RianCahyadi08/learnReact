import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';
import Label from '../Elements/Input/Label';
import Input from '../Elements/Input/Input';
import { Link } from 'react-router-dom';

const FormLogin = () => {
	return (
		<>
			<form action='#' method='POST'>
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
				<div className='flex items-center justify-between mb-4'>
					<Label htmlFor='remember' className='flex items-center'>
						<Input
							type='checkbox'
							id='remember'
							name='remember'
							className='mr-2'
						/>
						<span className='text-gray-600'>Remember me</span>
					</Label>
					<Link to='/forgot-password' className='text-blue-500 hover:underline'>
						Forgot password?
					</Link>
				</div>
				<Button
					type='submit'
					classNameName='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'
					name='Login'
				/>
			</form>
		</>
	);
};

export default FormLogin;
