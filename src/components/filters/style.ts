import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: '1 / span 2',
		width: `calc(100% - ${theme.spacing(4)})`,
		pl: theme.spacing(4),
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
});

export default useStyles;
