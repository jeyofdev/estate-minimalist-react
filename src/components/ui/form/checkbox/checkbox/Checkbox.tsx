import useTheme from '@hooks/useTheme';
import { FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { ChangeEvent, useState } from 'react';
import {
	CheckboxCheckedIcon,
	CheckboxIcon,
} from '../checkbox-icon/CheckboxIcon';
import useStyles from './style';

type UICheckboxPropsType = {
	label: string;
	defaultChecked?: boolean;
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UICheckbox = ({
	label,
	defaultChecked,
	checked,
	onChange,
}: UICheckboxPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	return (
		<FormControlLabel
			control={
				<Checkbox
					defaultChecked={defaultChecked}
					checked={isChecked}
					disableRipple
					checkedIcon={<CheckboxCheckedIcon />}
					icon={<CheckboxIcon />}
					sx={styles.checkbox}
					onChange={e => {
						handleChange(e);
						onChange(e);
					}}
				/>
			}
			label={
				<Typography variant='caption' sx={styles.label}>
					{label}
				</Typography>
			}
			sx={styles.root}
		/>
	);
};

export default UICheckbox;
