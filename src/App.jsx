import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='flex justify-center'>
				<RegisterPage />
			</div>
		</>
	);
}

export default App;
