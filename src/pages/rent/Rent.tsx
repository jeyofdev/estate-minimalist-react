import SingleEstateCard from '@components/card/single-estate-card/SingleEstateCard';
import Filters from '@components/filters/filters/Filters';
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
			<Box sx={styles.filtersContainer}>
				<Filters estates={datas} />
			</Box>
			<EstateList loading={loading} estates={datas} />
			<SingleEstateCard loading={loading} estate={datas[0]} />
		</Box>
	);
};

export default Rent;
