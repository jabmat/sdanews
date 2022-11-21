import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useState } from 'react';
import UserPage from './components/UserPage/UserPage';
import SearchPage from './components/SearchPage/SearchPage';
import { authContext } from './helpers/authContext';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	});

	return (
		<div className="App">
			<BrowserRouter>
				<authContext.Provider value={loggedIn}>
					{/* tu komponenty które mają się wyświetlać cały czas */}
					{/* usunięto Propsa z Navbara po użyciu useContext: */}
					<Navbar />

					{/* tu komponenty, które będą się pojawiać i znikać (podstrony, które będą się przełączać) */}

					<Routes>
						<Route path="/" element={<HomePage />} />
						{/* <Route path='/login' element={<p>Login Page</p>} /> */}
						<Route path="/register" element={<RegisterPage />} />
						{/* dorobić route na LoginPage */}
						<Route path="/login" element={<LoginPage />} />

						<Route path="/user" element={<UserPage />} />
						<Route path="/search" element={<SearchPage />} />
					</Routes>
				</authContext.Provider>
				{/* komponenty, które mają się wyświetlać cały czas, np footer */}
			</BrowserRouter>
		</div>
	);
}

export default App;
