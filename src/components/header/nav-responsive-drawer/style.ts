const useStyles = () => ({
	root: (drawerWidth: number) => ({
		display: {
			xs: 'block',
			sm: 'none',
		},

		'& .MuiDrawer-paper': {
			boxSizing: 'border-box',
			width: drawerWidth,
		},
	}),
});

export default useStyles;
