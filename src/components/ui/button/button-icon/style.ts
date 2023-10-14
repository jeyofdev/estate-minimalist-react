import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (padding?: string) => ({
		padding: padding ?? theme.spacing(0),
	}),
	icon: (iconFontSize?: string, iconColor?: string) => ({
		fontSize: iconFontSize ?? '1rem',
		color: iconColor ?? theme.palette.primary.dark,
	}),
});

export default useStyles;
