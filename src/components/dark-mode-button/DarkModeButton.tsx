import { DarkModeEnum } from '@enums/theme.enum';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { IconButton } from '@mui/material';
import useStyles from './style';

const DarkModeButton = () => {
	const { theme, handleThemeMode } = useTheme();
	const styles = useStyles(theme);

	return (
		<IconButton sx={styles.root} onClick={handleThemeMode}>
			<FontAwesomeIcon
				icon={theme.palette.mode === DarkModeEnum.DARK ? faSun : faMoon}
				style={styles.darkModeIcon}
			/>
		</IconButton>
	);
};

export default DarkModeButton;
