/**
 * Limit text by number words
 */
export const truncate = (text: string, limit: number): string => {
	const { length } = text.split(' ');

	return length <= limit
		? text
		: `${text.split(' ').slice(0, limit).join(' ')}...`;
};

export const formatPrice = (price: number, locales: string): string => {
	const currencyFormat = new Intl.NumberFormat(locales);
	return currencyFormat.format(price);
};
