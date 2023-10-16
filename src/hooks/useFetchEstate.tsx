import { useEffect, useState } from 'react';
import estateMock from '../mocks/estate_mock_datas.json';
import { EstateType } from '../types/estate.type';

const useFetchEstate = (activeEstateId: string) => {
	const [estate, setEstate] = useState<EstateType>();
	const [loading, setLoading] = useState<boolean>(true);

	const getEstate = () =>
		estateMock.find(
			(currentEstate: EstateType) => currentEstate.id === activeEstateId,
		);

	useEffect(() => {
		setEstate(getEstate());
		setLoading(false);
	}, [activeEstateId]);

	return { loading, datas: estate };
};

export default useFetchEstate;
