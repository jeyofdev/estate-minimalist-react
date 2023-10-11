import Logo from '@components/logo/Logo';
import { BreakpointEnum, DarkModeEnum } from '@enums/theme.enum';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import routesList from '@routes/routes';
import { NavLink as RouterLink } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import useStyles from './style';

export type HeaderBarPropsType = {
	handleDrawerToggle: () => void;
	logoText: string;
};

const HeaderBar = ({ handleDrawerToggle, logoText }: HeaderBarPropsType) => {
	const { theme, handleThemeMode } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const routes = routesList.filter((_, i) => i > 0);

	return (
		<AppBar component='nav' sx={styles.appBar}>
			<Toolbar sx={styles.toolbar}>
				{width < BreakpointEnum.SM && (
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
					>
						<MenuIcon sx={styles.menuIcon} />
					</IconButton>
				)}

				{width >= BreakpointEnum.SM && (
					<>
						<Box sx={styles.logoBox}>
							<Logo title={logoText} heightBox={28} />
						</Box>

						<Box sx={styles.linksBox}>
							{routes.map(route => (
								<Link
									key={route.name.toLowerCase().split(' ').join('-')}
									variant='h5'
									component={RouterLink}
									to={route.path}
									sx={styles.link}
								>
									{route.name}
								</Link>
							))}
						</Box>

						<Box sx={styles.darkModeBox}>
							<IconButton style={styles.darkModeBtn} onClick={handleThemeMode}>
								<FontAwesomeIcon
									icon={
										theme.palette.mode === DarkModeEnum.DARK ? faSun : faMoon
									}
									style={styles.darkModeIcon}
								/>
							</IconButton>
						</Box>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;
