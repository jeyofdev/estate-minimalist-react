import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		width: '100%',
	},
});

export default useStyles;
