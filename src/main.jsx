import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ForgotPasswordPage from './pages/forgot_password.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
