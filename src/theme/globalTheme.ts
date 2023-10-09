import { CommonColors, createTheme } from '@mui/material/styles';
import { Theme } from '@emotion/react';
import { Color } from '@mui/material';
import { BreakpointEnum } from '@enums/theme.enum';

const greyColors: Color = {
	50: '#fafafa',
	100: '#f5f5f5',
	200: '#eeeeee',
	300: '#e0e0e0',
	400: '#bdbdbd',
	500: '#9e9e9e',
	600: '#757575',
	700: '#616161',
	800: '#424242',
	900: '#212121',
	A100: '#f5f5f5',
	A200: '#eeeeee',
	A400: '#bdbdbd',
	A700: '#616161',
};

const commonColors: CommonColors = {
	black: '#121212',
	white: '#fff',
};

const breakpointsValues = {
	xs: BreakpointEnum.XS,
	sm: BreakpointEnum.SM,
	md: BreakpointEnum.MD,
	lg: BreakpointEnum.LG,
	xl: BreakpointEnum.XL,
};

// Custom theme
export const globalTheme = createTheme({
	breakpoints: {
		values: {
			...breakpointsValues,
		},
	},
	palette: {
		common: {
			...commonColors,
		},
		grey: { ...greyColors },
	},
});

// Dark theme
export const darkTheme: Theme = createTheme({
	...globalTheme,
	palette: {
		...globalTheme.palette,
		mode: 'dark',
		primary: {
			main: '#90caf9',
			light: 'rgb(166, 212, 250)',
			dark: 'rgb(100, 141, 174)',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		secondary: {
			main: '#2ec5d3',
			light: 'rgb(87, 208, 219)',
			dark: 'rgb(32, 137, 147)',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		error: {
			main: '#F44336',
			light: '#E57373',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ff9800',
			light: '#ffb74d',
			dark: '#f57c00',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},

		info: {
			main: '#2196f3',
			light: '#64b5f6',
			dark: '#1976d2',
			contrastText: '#fff',
		},

		success: {
			main: '#4caf50',
			light: '#81c784',
			dark: '#388e3c',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.7)',
			disabled: 'rgba(255, 255, 255, 0.5)',
		},
		background: {
			paper: '#424242',
			default: '#212121',
		},
		divider: 'rgba(255, 255, 255, 0.12)',
	},
});

// light theme
export const lightTheme: Theme = createTheme({
	...globalTheme,
	palette: {
		...globalTheme.palette,
		mode: 'light',
		primary: {
			main: '#1976d2',
			light: 'rgb(71, 145, 219)',
			dark: 'rgb(17, 82, 147)',
			contrastText: '#fff',
		},
		secondary: {
			main: '#2ec5d3',
			light: 'rgb(87, 208, 219)',
			dark: 'rgb(32, 137, 147)',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		error: {
			main: '#F44336',
			light: '#E57373',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ff9800',
			light: '#ffb74d',
			dark: '#f57c00',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},

		info: {
			main: '#2196f3',
			light: '#64b5f6',
			dark: '#1976d2',
			contrastText: '#fff',
		},

		success: {
			main: '#4caf50',
			light: '#81c784',
			dark: '#388e3c',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
		},
		background: {
			paper: '#fff',
			default: '#fff',
		},
		divider: 'rgba(0, 0, 0, 0.12)',
	},
});
