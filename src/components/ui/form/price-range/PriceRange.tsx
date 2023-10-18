import useTheme from '@hooks/useTheme';
import { Box, Slider } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import UITextField from '../text-field/TextField';
import useStyles from './style';

type PriceRangePropsType = {
	min: number;
	max: number;
	onChange: (e: Event) => void;
};

const PriceRange = ({ min, max, onChange }: PriceRangePropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [priceRangeValue, setPriceRangeValue] = useState<number[]>([min, max]);

	const handlePriceRangeChange = (_e: Event, newValue: number | number[]) => {
		setPriceRangeValue(newValue as number[]);
	};

	const handleTextFieldChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		inputChanged: 'min' | 'max',
	) => {
		if (inputChanged === 'min') {
			setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
		} else {
			setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
		}
	};

	return (
		<Box sx={styles.root}>
			<Slider
				value={priceRangeValue}
				onChange={(e, newValue) => {
					handlePriceRangeChange(e, newValue);
					onChange(e);
				}}
				min={min}
				max={max}
				sx={styles.slider}
			/>
			<Box sx={styles.textFieldsBox}>
				<UITextField
					type='number'
					value={priceRangeValue[0]}
					onChange={e => handleTextFieldChange(e, 'min')}
					label='min'
				/>

				<UITextField
					type='number'
					value={priceRangeValue[1]}
					onChange={e => handleTextFieldChange(e, 'max')}
					label='max'
				/>
			</Box>
		</Box>
	);
};

export default PriceRange;
