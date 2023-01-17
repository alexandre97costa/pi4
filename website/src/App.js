import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/main.css'

//Exportação de todas as páginas feitas
import Pages from './Pages';

export default function App() {
	return (
		<Router>

			<Routes>
				<Route path='/' element={<Pages.Index />} />
			</Routes>

			<Routes>
				<Route path='/politica-cookies' element={<Pages.PoliticaCookies />} />
			</Routes>

		</Router>
		
	);
}