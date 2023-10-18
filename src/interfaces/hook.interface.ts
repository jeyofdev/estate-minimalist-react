import { EstatePropertyTypeEnum, EstateTypeEnum } from '@enums/estate.enum';

export interface Ifilter {
	type: EstateTypeEnum;
	propertyType: EstatePropertyTypeEnum;
	rooms: string;
	location: string;
	additionnal: {
		garage: 'on' | 'off';
	};
	price: number[];
}
