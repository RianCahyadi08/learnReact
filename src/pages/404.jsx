import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<>
			<div className='flex justify-center items-center min-h-screen flex-col'>
				<h1 className='font-bold text-red-500 text-3xl'>Oops!</h1>
				<p>The page is not found!</p>
				<p>{error.statusText || error.message}</p>
			</div>
		</>
	);
};

export default ErrorPage;
