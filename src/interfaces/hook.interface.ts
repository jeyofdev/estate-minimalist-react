import { EstatePropertyTypeEnum, EstateTypeEnum } from '@enums/estate.enum';

export interface Ifilter {
	type: EstateTypeEnum | null;
	propertyType: EstatePropertyTypeEnum | null;
	rooms: string | number | null;
	location: string;
	additionnal: {
		garage: 'on' | 'off';
	};
	price: number[];
}
