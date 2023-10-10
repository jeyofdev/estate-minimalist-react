import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@mui/material';
import Router from '@routes/Router';
import './App.css';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};

export default App;
