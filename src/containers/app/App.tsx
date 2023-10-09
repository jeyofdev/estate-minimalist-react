import { ThemeContext } from '@contexts/ThemeContext';
import { DarkModeEnum } from '@enums/theme.enum';
import { ThemeProvider } from '@mui/material';
import Home from '@pages/Home';
import { darkTheme, lightTheme } from '@theme/global.theme';
import { useContext } from 'react';
import './App.css';

const App = () => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<ThemeProvider
			theme={
				themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme
			}
		>
			<Home />
		</ThemeProvider>
	);
};

export default App;
