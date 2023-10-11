import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
	},
});

export default useStyles;
