
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Exemplo from './view/exemplo';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact path='/'
					element={<Exemplo/>}
				/>
			</Routes>
		</Router>
	);
}

