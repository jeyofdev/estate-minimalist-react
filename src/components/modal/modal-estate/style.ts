import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		borderRadius: theme.spacing(1.5),
		boxShadow: 'none',
		maxHeight: '85vh',
		maxWidth: '85%',
		overflowY: 'scroll',
	},
	closeTriggerBox: {
		position: 'absolute',
		top: theme.spacing(4),
		right: theme.spacing(4),
	},
});

export default useStyles;
