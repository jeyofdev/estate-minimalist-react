import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		padding: `${theme.spacing(6)} ${theme.spacing(6)}`,
		display: 'flex',
		backgroundColor: theme.palette.background.default,
	},
});

export default useStyles;
