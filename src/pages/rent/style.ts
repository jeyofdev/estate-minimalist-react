import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
		minHeight: 'calc(100vh - 65px)',
		mt: '-64.5px',
		pl: theme.spacing(4),
	},
	filtersContainer: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			gridColumn: '1 / span 3',
			display: 'block',
		},

		[theme.breakpoints.up('md')]: {
			gridColumn: '1 / span 2',
		},
	},
});

export default useStyles;
