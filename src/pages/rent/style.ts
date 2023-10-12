const useStyles = () => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		minHeight: 'calc(100vh - 65px)',
		mt: '64.5px',
	},
	filtersBox: {
		gridColumn: '1 / span 2',
		// backgroundColor: 'red',
		width: '100%',
	},
	previewBox: {
		gridColumn: 'auto / span 6',
		// backgroundColor: 'green',
		width: '100%',
	},
});

export default useStyles;
