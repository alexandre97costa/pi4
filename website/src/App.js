import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from './Pages';

export default function App() {
  return (
		<Router>
			<Routes>
				<Route
					exact path='/microsite'
					element={<Pages.Exemplo/>}
				/>
			</Routes>
		</Router>
  );
}