import Filters from '@components/filters/Filters';
import EstateList from '@components/lists/estate-list/EstateList';
import useFetchEstates from '@hooks/useFetchEstates';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import useStyles from './style';

const Rent = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { loading, datas } = useFetchEstates();

	return (
		<Box sx={styles.root}>
			<Filters estates={datas} />
			<EstateList loading={loading} estates={datas} />
			<Box sx={styles.previewBox}>preview</Box>
		</Box>
	);
};

export default Rent;
