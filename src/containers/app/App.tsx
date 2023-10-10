import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@mui/material';
import Home from '@pages/Home';
import './App.css';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
};

export default App;
