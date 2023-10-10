import Layout from '@components/Layout';
import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@mui/material';
import Router from '@routes/Router';
import './App.css';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Router />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
