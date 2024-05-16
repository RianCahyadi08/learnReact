import { Link } from 'react-router-dom';

const ForgotPassLayout = (props) => {
	return (
		<>
			<div className='flex justify-center items-center min-h-screen'>
				<div className='bg-white p-8 rounded shadow-md w-96 text-left'>
					<h2 className='text-2xl font-semibold mb-6'>{props.title}</h2>
					{props.children}
					<p className='text-center text-gray-600 mt-4'>
						<Link to='/' className='text-blue-500 hover:underline'>
							Back
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default ForgotPassLayout;
