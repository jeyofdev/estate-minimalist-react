import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
		minHeight: 'calc(100vh - 65px)',
		mt: '64.5px',
	},
	previewBox: {
		gridColumn: 'auto / span 6',
		// backgroundColor: 'green',
		width: '100%',
	},
});

export default useStyles;
