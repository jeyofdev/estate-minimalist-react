import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		pt: theme.spacing(4),
	},
	title: {
		my: 2,
	},
	listItemBtn: {
		textAlign: 'center',
	},
	logoBox: {
		width: 'auto',
	},
	navlist: {
		width: '100%',
	},
	darkModeBox: {
		mt: theme.spacing(2.5),
	},
});

export default useStyles;
