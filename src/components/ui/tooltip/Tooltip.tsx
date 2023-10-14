import { PlacementEnum } from '@enums/theme.enum';
import useTheme from '@hooks/useTheme';
import { Tooltip, Typography, styled } from '@mui/material';
import { ReactNode } from 'react';
import { GlobalPropsType } from '../../../types/global-props.type';
import useStyles from './style';

export type UITooltipPropsType = Pick<GlobalPropsType, 'children'> & {
	placement: PlacementEnum;
	arrow?: boolean;
	label: ReactNode;
	className?: string;
};

const UITooltip = styled(
	({ className, placement, label, arrow, children }: UITooltipPropsType) => {
		const { theme } = useTheme();
		const styles = useStyles(theme);

		return (
			<Tooltip
				title={
					<Typography variant='caption' sx={styles.label}>
						{label}
					</Typography>
				}
				placement={placement}
				arrow={arrow}
				classes={{ popper: className }}
			>
				{children}
			</Tooltip>
		);
	},
)(() => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return styles.root;
});

export default UITooltip;
