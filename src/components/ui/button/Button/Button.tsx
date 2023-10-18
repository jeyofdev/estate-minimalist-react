import {
	StyleFlexDirectionEnum,
	StyleVariantTypographyEnum,
} from '@enums/style.enum';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Button, Typography } from '@mui/material';
import { MouseEvent } from 'react';
import { GlobalPropsType } from '../../../../types/global-props.type';
import useStyles from './style';

export type UIButtonPropsType = Pick<GlobalPropsType, 'children'> & {
	startIcon?: IconProp;
	direction?: StyleFlexDirectionEnum;
	typoVariant: StyleVariantTypographyEnum;
	active: boolean;
	width?: number | 'auto';
	onClick?: (e: MouseEvent<HTMLElement>) => void;
};

const UIButton = ({
	startIcon,
	typoVariant,
	children,
	active,
	onClick,
	width = 'auto',
	direction = StyleFlexDirectionEnum.ROW,
}: UIButtonPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Button
			variant='contained'
			startIcon={
				startIcon ? (
					<FontAwesomeIcon icon={startIcon} style={styles.startIcon} />
				) : null
			}
			sx={styles.root(direction, active, width)}
			onClick={onClick}
		>
			<Typography variant={typoVariant} sx={styles.typo}>
				{children}
			</Typography>
		</Button>
	);
};

export default UIButton;
