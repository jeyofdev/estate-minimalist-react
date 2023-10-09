import { DarkModeEnum } from '@enums/theme.enum';

export type IThemeContext = {
	themeMode: DarkModeEnum;
	handleThemeMode: () => void;
};
