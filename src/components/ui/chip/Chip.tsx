import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Chip, Typography } from '@mui/material';
import useStyles from './style';

export type ChipPropsType = {
	icon: IconProp;
	label: string | number;
};

const UIChip = ({ icon, label }: ChipPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Chip
			icon={<FontAwesomeIcon icon={icon} style={styles.chipIcon} />}
			label={
				<Typography variant='caption' sx={styles.chipTypo}>
					{label}
				</Typography>
			}
			sx={styles.root}
		/>
	);
};

export default UIChip;
