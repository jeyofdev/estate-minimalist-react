import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: theme.palette.background.paper,
		border: `2px solid ${theme.palette.common.black}`,
		boxShadow: 24,
		p: 4,
	},
	closeTriggerBox: {
		position: 'absolute',
		top: theme.spacing(4),
		right: theme.spacing(4),
	},
});

export default useStyles;
