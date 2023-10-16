import LayoutGlobal from '@components/layout/layout-global/LayoutGlobal';
import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@mui/material';
import Router from '@routes/Router';
import './App.css';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<LayoutGlobal>
				<Router />
			</LayoutGlobal>
		</ThemeProvider>
	);
};

export default App;
