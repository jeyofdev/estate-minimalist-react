import Logo from '@components/logo/Logo';
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import useStyles from './style';

export type NavPropsType = {
	handleDrawerToggle: () => void;
	navItems: string[];
	logoText: string;
};

const Nav = ({ handleDrawerToggle, navItems, logoText }: NavPropsType) => {
	const styles = useStyles();

	return (
		<Box onClick={handleDrawerToggle} sx={styles.root}>
			<Logo title={logoText} />

			<Divider />

			<List>
				{navItems.map(item => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={styles.listItemBtn}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Nav;
