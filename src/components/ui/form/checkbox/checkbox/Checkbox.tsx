import useTheme from '@hooks/useTheme';
import { FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {
	CheckboxCheckedIcon,
	CheckboxIcon,
} from '../checkbox-icon/CheckboxIcon';
import useStyles from './style';

type UICheckboxPropsType = {
	label: string;
	defaultChecked?: boolean;
};

const UICheckbox = ({ label, defaultChecked }: UICheckboxPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<FormControlLabel
			control={
				<Checkbox
					defaultChecked={defaultChecked}
					disableRipple
					checkedIcon={<CheckboxCheckedIcon />}
					icon={<CheckboxIcon />}
					sx={styles.checkbox}
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
