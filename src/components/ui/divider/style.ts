import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (borderColor?: string, margin?: string) => ({
		borderBottomWidth: 1.5,
		padding: 0,
		margin: margin ?? 0,
		borderColor: borderColor ?? theme.palette.divider,
		width: '100%',
	}),
});

export default useStyles;
