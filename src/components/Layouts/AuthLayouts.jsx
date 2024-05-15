const AuthLayout = (props) => {
	return (
		<>
			<div className='bg-white p-8 rounded shadow-md w-96 text-left'>
				<h2 className='text-2xl font-semibold mb-6'>{props.title}</h2>
				{props.children}
				<p className='text-center text-gray-600 mt-4'>
					Don't have an account?{' '}
					<a href='#' className='text-blue-500 hover:underline'>
						Sign Up
					</a>
				</p>
			</div>
		</>
	);
};

export default AuthLayout;
