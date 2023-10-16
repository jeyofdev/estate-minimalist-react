import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (padding?: string, margin?: string) => ({
		padding: padding ?? theme.spacing(0),
		margin: margin ?? theme.spacing(0),
	}),
	icon: (iconFontSize?: string, iconColor?: string) => ({
		fontSize: iconFontSize ?? '1rem',
		color: iconColor ?? theme.palette.primary.dark,
	}),
});

export default useStyles;
