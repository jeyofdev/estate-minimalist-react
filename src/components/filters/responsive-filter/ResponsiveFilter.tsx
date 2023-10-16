import ButtonIcon from '@components/ui/button/button-icon/ButtonIcon';
import { BreakpointEnum } from '@enums/theme.enum';
import { faCircleXmark, faSliders } from '@fortawesome/free-solid-svg-icons';
import useTheme from '@hooks/useTheme';
import useWindowSize from '@hooks/useWindowSize';
import { Box, Drawer } from '@mui/material';
import { KeyboardEvent, MouseEvent, useState } from 'react';
import { EstateType } from '../../../types/estate.type';
import Filters from '../filters/Filters';
import useStyles from './style';

type ResponsiveFiltersPropsType = {
	breakpoint: BreakpointEnum;
	estates: EstateType[];
};

const ResponsiveFilters = ({
	breakpoint,
	estates,
}: ResponsiveFiltersPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [isOpen, setIsOpen] = useState(false);
	const { width } = useWindowSize();

	const toggleDrawer =
		(open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setIsOpen(open);
		};

	const content = () => (
		<Box
			sx={styles.contentBox}
			role='presentation'
			// onClick={toggleDrawer(false)}
			// onKeyDown={toggleDrawer(false)}
		>
			<Box sx={styles.filtersContainer}>
				<Filters estates={estates} />
			</Box>
		</Box>
	);

	return (
		<Box sx={styles.root}>
			{width < breakpoint && (
				<>
					<ButtonIcon icon={faSliders} onClick={toggleDrawer(true)} />
					<Drawer
						anchor={'right'}
						open={isOpen}
						onClose={toggleDrawer(false)}
						sx={styles.drawer}
					>
						<Box sx={styles.closeTriggerBox}>
							<ButtonIcon
								icon={faCircleXmark}
								onClick={toggleDrawer(false)}
								iconFontSize='1.3rem'
							/>
						</Box>

						{content()}
					</Drawer>
				</>
			)}
		</Box>
	);
};

export default ResponsiveFilters;
