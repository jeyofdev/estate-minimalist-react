import { BreakpointEnum } from '@enums/theme.enum';
import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		width: '100%',
	},
	contentBox: {
		maxWidth: BreakpointEnum.XL,
		margin: '0 auto',
	},
	primaryContentBox: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		minHeight: 'calc(100vh - 65px)',
		mt: '64.5px',
	},
	filtersBox: {
		gridColumn: '1 / span 2',
		backgroundColor: 'red',
		width: '100%',
	},
	resultsBox: {
		gridColumn: 'auto / span 4',
		backgroundColor: 'blue',
		width: '100%',
	},
	previewBox: {
		gridColumn: 'auto / span 6',
		backgroundColor: 'green',
		width: '100%',
	},
});

export default useStyles;
