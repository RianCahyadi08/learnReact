import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ForgotPasswordPage from './pages/forgot_password.jsx';
import ProductPage from './pages/products.jsx';
import ProfilePage from './pages/profile.jsx';
import DetailProductPage from './pages/detailProduct.jsx';

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
	{
		path: '/products',
		element: <ProductPage />,
	},
	{
		path: '/profile/:id',
		element: <ProfilePage />,
	},
	{
		path: '/product/:id',
        element: <DetailProductPage />,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
