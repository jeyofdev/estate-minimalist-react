import useTheme from '@hooks/useTheme';
import { FormControlLabel, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import useStyles from './style';

type UITextFieldType = {
	type: string;
	label: string;
	variant?: 'filled' | 'outlined' | 'standard';
	value: string | number;
	onChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
};

const UITextField = ({
	type,
	label,
	value,
	onChange,
	variant = 'outlined',
}: UITextFieldType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<FormControlLabel
			control={
				<TextField
					type={type}
					variant={variant}
					InputLabelProps={{
						shrink: true,
					}}
					sx={styles.textField}
					value={value}
					onChange={onChange}
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

export default UITextField;
