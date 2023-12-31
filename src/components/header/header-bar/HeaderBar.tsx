import DarkModeButton from '@components/dark-mode-button/DarkModeButton';
import Logo from '@components/logo/Logo';
import { BreakpointEnum } from '@enums/theme.enum';
import useTheme from '@hooks/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import routesList from '@routes/routes';
import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import useStyles from './style';

export type HeaderBarPropsType = {
	handleDrawerToggle: () => void;
	logoText: string;
};

const HeaderBar = ({ handleDrawerToggle, logoText }: HeaderBarPropsType) => {
	const { theme } = useTheme();
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
						sx={{ ml: theme.spacing(0) }}
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
									component={NavLink}
									to={route.path}
									sx={styles.link}
								>
									{route.name}
								</Link>
							))}
						</Box>

						<Box sx={styles.darkModeBox}>
							<DarkModeButton />
						</Box>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;
