import { EstateTypeEnum } from '@enums/estate.enum';
import { useEffect, useState } from 'react';
import estateMock from '../mocks/estate_mock_datas.json';
import { EstateType } from '../types/estate.type';

const useFetchEstates = (estateType?: EstateTypeEnum) => {
	const [estates, setEstates] = useState<EstateType[]>(estateMock);
	const [loading, setLoading] = useState<boolean>(true);

	const filteredEstateByType = () => {
		if (estateType) {
			return estates.filter((estate: EstateType) => estate.type === estateType);
		}

		return estates;
	};

	useEffect(() => {
		setEstates(filteredEstateByType());
		setLoading(false);
	}, []);

	return { loading, datas: estates };
};

export default useFetchEstates;
