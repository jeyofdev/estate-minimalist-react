import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'none',
		width: '100%',

		py: theme.spacing(10),

		[theme.breakpoints.up('sm')]: {
			display: 'block',
			gridColumn: '1 / span 3',
		},

		[theme.breakpoints.up('md')]: {
			display: 'block',
			gridColumn: '1 / span 2',
		},
	},
	titleSection: {
		color: theme.palette.primary.dark,
	},
	filtersListBox: {
		mt: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(7),
	},
	propertyTypeBox: {
		display: 'flex',
		gap: theme.spacing(2),
		flexWrap: 'wrap',
	},
	roomsBox: {
		display: 'flex',
		gap: theme.spacing(2),
		flexWrap: 'wrap',
	},
	additionalBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
});

export default useStyles;
