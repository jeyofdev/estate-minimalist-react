import EstateList from '@components/lists/estate-list/EstateList';
import { Box } from '@mui/material';
import useStyles from './style';

const Rent = () => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			<Box sx={styles.filtersBox}>filters</Box>
			<EstateList />
			<Box sx={styles.previewBox}>preview</Box>
		</Box>
	);
};

export default Rent;
