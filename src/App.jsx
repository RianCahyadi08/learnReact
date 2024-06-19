import { useState } from 'react';
import './App.css';
import LoginPage from './pages/login';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <div className='flex justify-center'> */}
			<LoginPage />
			{/* </div> */}
		</>
	);
}

export default App;
