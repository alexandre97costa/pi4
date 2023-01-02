import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	process.env.REACT_APP_MODE === 'dev' ?
		<React.StrictMode>
			<App />
		</React.StrictMode>
		:
		<App />
);
