const useStyles = () => ({
	root: (drawerWidth: number) => ({
		position: 'relative',
		display: {
			xs: 'block',
			sm: 'none',
		},

		'& .MuiDrawer-paper': {
			boxSizing: 'border-box',
			width: drawerWidth,
		},
	}),
	closeBtn: {
		position: 'absolute',
		top: '0.1rem',
		right: '0.1rem',
	},
	closeBtnIcon: {},
});

export default useStyles;
