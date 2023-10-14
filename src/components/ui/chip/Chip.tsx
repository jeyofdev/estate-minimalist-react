import { PlacementEnum } from '@enums/theme.enum';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Chip, Typography } from '@mui/material';
import UITooltip from '../tooltip/Tooltip';
import useStyles from './style';

export type ChipPropsType = {
	icon: IconProp;
	label: string | number;
	tooltipLabel?: string;
	tooltipArrow?: boolean;
};

const UIChip = ({ icon, label, tooltipLabel, tooltipArrow }: ChipPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			{tooltipLabel ? (
				<UITooltip
					placement={PlacementEnum.TOP}
					arrow={tooltipArrow}
					label={tooltipLabel}
				>
					<Chip
						icon={<FontAwesomeIcon icon={icon} style={styles.chipIcon} />}
						label={
							<Typography variant='caption' sx={styles.chipTypo}>
								{label}
							</Typography>
						}
						sx={styles.root}
					/>
				</UITooltip>
			) : (
				<Chip
					icon={<FontAwesomeIcon icon={icon} style={styles.chipIcon} />}
					label={
						<Typography variant='caption' sx={styles.chipTypo}>
							{label}
						</Typography>
					}
					sx={styles.root}
				/>
			)}
		</>
	);
};

export default UIChip;
