import { CommonColors, createTheme } from '@mui/material/styles';
import { Color, Theme } from '@mui/material';
import { BreakpointEnum } from '@enums/theme.enum';
import { TypographyOptions } from '@mui/material/styles/createTypography';

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

const initialTheme = createTheme({
	breakpoints: {
		values: {
			xs: BreakpointEnum.XS,
			sm: BreakpointEnum.SM,
			md: BreakpointEnum.MD,
			lg: BreakpointEnum.LG,
			xl: BreakpointEnum.XL,
		},
	},
});

const typographyTheme: TypographyOptions = {
	fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	fontSize: 16,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 700,

	[initialTheme.breakpoints.up('sm')]: {
		fontSize: 16,
	},
	[initialTheme.breakpoints.up('md')]: {
		fontSize: 16,
	},
	[initialTheme.breakpoints.up('lg')]: {
		fontSize: 16,
	},
	[initialTheme.breakpoints.up('xl')]: {
		fontSize: 16,
	},

	h1: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
		fontSize: '6rem',
		lineHeight: 1.167,
		letterSpacing: '-0.01562em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '6rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '6rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '6rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '6rem',
		// },
	},
	h2: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 300,
		fontSize: '3.75rem',
		lineHeight: 1.2,
		letterSpacing: '-0.00833em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '3.75rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '3.75rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '3.75rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '3.75rem',
		// },
	},
	h3: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '2.5rem',
		lineHeight: 1.167,
		letterSpacing: '0em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '3rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '3rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '3rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '3rem',
		// },
	},
	h4: {
		fontFamily: "'Poppins', sans-serif",

		fontWeight: 400,
		fontSize: '1.65rem',
		lineHeight: 1.235,
		letterSpacing: '0.00735em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '1.65rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '1.65rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '1.65rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '1.65rem',
		// },
	},
	h5: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '1.4rem',
		lineHeight: 1,
		letterSpacing: '0em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '1.4rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '1.4rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '1.4rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '1.4rem',
		// },
	},
	h6: {
		fontFamily: "'Poppins', sans-serif",
		fontWeight: 500,
		fontSize: '0.75rem',
		lineHeight: 1.6,
		letterSpacing: '0.0075em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.75rem',
		// },
	},
	subtitle1: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '1rem',
		lineHeight: 1.25,
		letterSpacing: '0.00938em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '1rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '1rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '1rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '1rem',
		// },
	},
	subtitle2: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 500,
		fontSize: '1.1rem',
		lineHeight: 1.57,
		letterSpacing: '0.00714em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '1.1rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '1.1rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '1.1rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '1.1rem',
		// },
	},
	body1: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '0.9rem',
		lineHeight: 1,
		letterSpacing: '0.00938em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.9rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.9rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.9rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.9rem',
		// },
	},
	body2: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '0.875rem',
		lineHeight: 1.35,
		letterSpacing: '0.01071em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.875rem',
		// },
	},
	button: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 500,
		fontSize: '0.875rem',
		lineHeight: 1.75,
		letterSpacing: '0.02857em',
		textTransform: 'uppercase',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.875rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.875rem',
		// },
	},
	caption: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '0.75rem',
		lineHeight: 1.66,
		letterSpacing: '0.03333em',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.75rem',
		// },
	},
	overline: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontWeight: 400,
		fontSize: '0.75rem',
		lineHeight: 2.66,
		letterSpacing: '0.08333em',
		textTransform: 'uppercase',

		// [initialTheme.breakpoints.up('sm')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('md')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('lg')]: {
		// 	fontSize: '0.75rem',
		// },
		// [initialTheme.breakpoints.up('xl')]: {
		// 	fontSize: '0.75rem',
		// },
	},
};

// Global theme
export const globalTheme: Theme = createTheme({
	...initialTheme,
	palette: {
		common: commonColors,
		grey: greyColors,
	},
	typography: typographyTheme,
	spacing: 4,
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
			default: '#efefef',
		},
		divider: '#d6d6d6',
	},
});
