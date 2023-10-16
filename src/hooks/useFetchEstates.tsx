import { EstateTypeEnum } from '@enums/estate.enum';
import { useEffect, useState } from 'react';
import estateMock from '../mocks/estate_mock_datas.json';
import { EstateType } from '../types/estate.type';

const useFetchEstates = () => {
	const [estates, setEstates] = useState<EstateType[]>(estateMock);
	const [loading, setLoading] = useState<boolean>(true);

	const filteredEstateByType = () =>
		estates.filter((estate: EstateType) => estate.type === EstateTypeEnum.RENT);

	useEffect(() => {
		setEstates(filteredEstateByType());
		setLoading(false);
	}, []);

	return { loading, datas: estates };
};

export default useFetchEstates;
