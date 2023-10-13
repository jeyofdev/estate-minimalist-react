import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
		minHeight: 'calc(100vh - 65px)',
		mt: '64.5px',
		px: theme.spacing(4),
	},
	previewBox: {
		display: {
			xs: 'none',
			md: 'flex',
		},
		gridColumn: {
			xs: 'auto / span 6',
		},
		width: '100%',
	},
});

export default useStyles;
