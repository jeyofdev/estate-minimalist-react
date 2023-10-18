import Filters from '@components/filters/filters/Filters';
import LayoutPage from '@components/layout/layout-page/LayoutPage';
import EstateList from '@components/lists/estate-list/EstateList';
import Preview from '@components/preview/Preview';
import useFilter from '@hooks/useFilter';
import { Ifilter } from '@interfaces/hook.interface';
import { useState } from 'react';

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [activeEstateId, setActiveEstateId] = useState<string | undefined>();

	const defaultFilters: Ifilter = {
		type: null,
		propertyType: null,
		rooms: null,
		location: 'all',
		additionnal: {
			garage: 'off',
		},
		price: [100, 1000000],
	};

	const { filters, setFilters, loading, datas, filteredDatas } =
		useFilter(defaultFilters);

	return (
		<LayoutPage
			renderFilters={
				<Filters
					estates={datas}
					defaultFilters={defaultFilters}
					filters={filters}
					setFilters={setFilters}
				/>
			}
		>
			{filteredDatas.length ? (
				<>
					<EstateList
						loading={loading}
						estates={filteredDatas}
						setActiveEstateId={setActiveEstateId}
						setModalIsOpen={setModalIsOpen}
					/>

					<Preview
						activeEstateId={activeEstateId ?? filteredDatas[0].id}
						modalIsOpen={modalIsOpen}
						setModalIsOpen={setModalIsOpen}
					/>
				</>
			) : (
				'no result'
			)}
		</LayoutPage>
	);
};

export default Home;
