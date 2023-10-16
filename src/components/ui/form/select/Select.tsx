import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useStyles from './style';

type UISelectPropsType = {
	items: { value: string; label: string }[];
};

const UISelect = ({ items }: UISelectPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Select
			sx={styles.root}
			defaultValue=''
			displayEmpty
			renderValue={value => (
				<Box sx={styles.valueBox}>
					<FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
					{value}
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
