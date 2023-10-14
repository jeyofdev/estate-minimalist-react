import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',
		py: theme.spacing(10),
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
