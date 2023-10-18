import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import useStyles from './style';

type UISelectPropsType = {
	items: { value: string; label: string }[];
	value: string;
	onChange: (event: SelectChangeEvent) => void;
};

const UISelect = ({ items, value, onChange }: UISelectPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const [selectValue, setSelectValue] = useState(value);

	const handleChange = (e: SelectChangeEvent) => {
		setSelectValue(e.target.value as string);
	};

	return (
		<Select
			sx={styles.root}
			defaultValue={value}
			displayEmpty
			value={selectValue}
			onChange={e => {
				onChange(e);
				handleChange(e);
			}}
			renderValue={v => (
				<Box sx={styles.valueBox}>
					<FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
					{v}
				</Box>
			)}
			MenuProps={{
				PaperProps: {
					sx: styles.paper,
				},
			}}
		>
			{items.map(option => (
				<MenuItem key={option.value} value={option.value} sx={styles.menuItem}>
					{option.label}
				</MenuItem>
			))}
		</Select>
	);
};

export default UISelect;
