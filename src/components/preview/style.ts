import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		display: {
			xs: 'none',
			md: 'flex',
		},
		flexDirection: 'column',
		gridColumn: {
			xs: 'auto / span 6',
		},
		backgroundColor: theme.palette.background.paper,
		width: '100%',
	},
	blockPage: {
		position: 'fixed',
	},
});

export default useStyles;
