import { Box, Typography } from '@mui/material';
import useStyles from './style';

const EstateList = () => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			<Typography variant='h5'>Search Results (10)</Typography>
		</Box>
	);
};

export default EstateList;
