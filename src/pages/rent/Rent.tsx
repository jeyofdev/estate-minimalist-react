import Filters from '@components/filters/filters/Filters';
import LayoutPage from '@components/layout/layout-page/LayoutPage';
import EstateList from '@components/lists/estate-list/EstateList';
import Preview from '@components/preview/Preview';
import { EstateTypeEnum } from '@enums/estate.enum';
import useFetchEstates from '@hooks/useFetchEstates';
import { useState } from 'react';

const Rent = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [activeEstateId, setActiveEstateId] = useState<string | undefined>();
	const { loading, datas } = useFetchEstates(EstateTypeEnum.RENT);

	return (
		<LayoutPage renderFilters={<Filters estates={datas} />}>
			<>
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
			</>
		</LayoutPage>
	);
};

export default Rent;
