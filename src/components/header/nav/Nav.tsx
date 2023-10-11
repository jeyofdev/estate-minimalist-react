import Logo from '@components/logo/Logo';
import { Box, Divider } from '@mui/material';
import useStyles from './style';

export type NavPropsType = {
	handleDrawerToggle: () => void;

	logoText: string;
};

const Nav = ({ handleDrawerToggle, logoText }: NavPropsType) => {
	const styles = useStyles();

	return (
		<Box onClick={handleDrawerToggle} sx={styles.root}>
			<Logo title={logoText} />

			<Divider />

			{/* <List>
				{navItems.map(item => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={styles.listItemBtn}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List> */}
		</Box>
	);
};

export default Nav;
