import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	loader: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
