import { ThemeContext } from '@contexts/ThemeContext';
import { DarkModeEnum } from '@enums/theme.enum';
import { darkTheme, lightTheme } from '@theme/global.theme';
import { useContext } from 'react';

const useTheme = () => {
	const { themeMode, handleThemeMode } = useContext(ThemeContext);

	const theme =
		themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme;

	return { theme, handleThemeMode };
};

export default useTheme;
