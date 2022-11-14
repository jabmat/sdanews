import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* tu komponenty które mają się wyświetlać cały czas */}

				<Navbar />
				{/* tu komponenty, które będą się pojawiać i znikać (podstrony, które będą się przełączać) */}
				{/* <HomePage /> */}

				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path='/login' element={<p>Login Page</p>} /> */}
					<Route path="/register" element={<RegisterPage />} />
					{/* dorobić route na LoginPage */}
					<Route path="/login" element={<LoginPage />} />
				</Routes>

				{/* komponenty, które mają się wyświetlać cały czas, np footer */}
			</BrowserRouter>
		</div>
	);
}

export default App;
