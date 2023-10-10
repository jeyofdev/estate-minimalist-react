import App from '@containers/app/App';
import ThemeContextProvider from '@contexts/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>,
);
