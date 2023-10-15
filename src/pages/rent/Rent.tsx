import SingleEstateCard from '@components/card/single-estate-card/SingleEstateCard';
import Filters from '@components/filters/filters/Filters';
import EstateList from '@components/lists/estate-list/EstateList';
import useFetchEstates from '@hooks/useFetchEstates';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { useState } from 'react';
import useStyles from './style';

const Rent = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const [activeEstateId, setActiveEstateId] = useState<string | undefined>();
	const { loading, datas } = useFetchEstates();

	return (
		<Box sx={styles.root}>
			<Box sx={styles.filtersContainer}>
				<Filters estates={datas} />
			</Box>
			<EstateList
				loading={loading}
				estates={datas}
				setActiveEstateId={setActiveEstateId}
			/>
			<SingleEstateCard activeEstateId={activeEstateId ?? datas[0].id} />
		</Box>
	);
};

export default Rent;
