import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { IconButton } from '@mui/material';
import { MouseEventHandler } from 'react';
import useStyles from './style';

type ButtonIconPropsType = {
	icon: IconDefinition;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	iconFontSize?: string;
	iconColor?: string;
	padding?: string;
	margin?: string;
};

const ButtonIcon = ({
	icon,
	onClick,
	iconFontSize,
	iconColor,
	padding,
	margin,
}: ButtonIconPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	return (
		<IconButton sx={styles.root(padding, margin)} onClick={onClick}>
			<FontAwesomeIcon
				icon={icon}
				style={styles.icon(iconFontSize, iconColor)}
			/>
		</IconButton>
	);
};

export default ButtonIcon;
