import useTheme from '@hooks/useTheme';
import { styled } from '@mui/material';
import useStyles from './style';

export const CheckboxIcon = styled('span')(() => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return styles.icon;
});

export const CheckboxCheckedIcon = styled(CheckboxIcon)(() => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return styles.checkedIcon;
});
