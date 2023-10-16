import Filters from '@components/filters/filters/Filters';
import EstateList from '@components/lists/estate-list/EstateList';
import Preview from '@components/preview/Preview';
import useFetchEstates from '@hooks/useFetchEstates';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { useState } from 'react';
import useStyles from './style';

const Rent = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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
				setModalIsOpen={setModalIsOpen}
			/>

			<Preview
				activeEstateId={activeEstateId ?? datas[0].id}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
		</Box>
	);
};

export default Rent;
