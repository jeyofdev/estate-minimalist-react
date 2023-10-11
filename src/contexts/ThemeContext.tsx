import { DarkModeEnum } from '@enums/theme.enum';
import { IThemeContext } from '@interfaces/context.interface';
import { createContext, useState } from 'react';
import { ThemeContextProviderPropsType } from '../types/context-props.type';

export const ThemeContext = createContext<IThemeContext>({
	themeMode: DarkModeEnum.LIGHT,
	handleThemeMode: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProviderPropsType) => {
	const [themeMode, setThemeMode] = useState<DarkModeEnum>(DarkModeEnum.LIGHT);

	const handleThemeMode = () => {
		setThemeMode(
			themeMode === DarkModeEnum.DARK ? DarkModeEnum.LIGHT : DarkModeEnum.DARK,
		);
	};

	return (
		<ThemeContext.Provider value={{ themeMode, handleThemeMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
