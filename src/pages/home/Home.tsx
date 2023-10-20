import Filters from '@components/filters/filters/Filters';
import LayoutPage from '@components/layout/layout-page/LayoutPage';
import EstateList from '@components/lists/estate-list/EstateList';
import Preview from '@components/preview/Preview';
import useFilter from '@hooks/useFilter';
import { Ifilter } from '@interfaces/hook.interface';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [activeEstateId, setActiveEstateId] = useState<string | undefined>();
	const location = useLocation();
	const navigate = useNavigate();

	const defaultFilters: Ifilter = {
		type: null,
		propertyType: null,
		rooms: null,
		location: 'all',
		additionnal: {
			garage: false,
			pool: false,
		},
		price: [100, 10000],
	};

	const { filters, setFilters, loading, datas, filteredDatas } =
		useFilter(defaultFilters);

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/home');
		}
	}, []);

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
			<>
				<EstateList
					loading={loading}
					estates={filteredDatas}
					defaultFilters={defaultFilters}
					filters={filters}
					setFilters={setFilters}
					setActiveEstateId={setActiveEstateId}
					setModalIsOpen={setModalIsOpen}
				/>

				{filteredDatas.length ? (
					<Preview
						activeEstateId={activeEstateId ?? filteredDatas[0].id}
						modalIsOpen={modalIsOpen}
						setModalIsOpen={setModalIsOpen}
					/>
				) : null}
			</>
		</LayoutPage>
	);
};

export default Home;
