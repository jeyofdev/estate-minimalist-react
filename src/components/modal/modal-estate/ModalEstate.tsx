import ButtonIcon from '@components/ui/button/button-icon/ButtonIcon';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useTheme from '@hooks/useTheme';
import { Box, Modal, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import useStyles from './style';

type ModalEstatePropsType = {
	isOpen: boolean;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	activeEstateId: string;
};

const ModalEstate = ({
	isOpen,
	setModalIsOpen,
	activeEstateId,
}: ModalEstatePropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	const handleShow = () => setModalIsOpen(!isOpen);

	return (
		<Modal open={isOpen} onClose={handleShow}>
			<Box sx={styles.root}>
				<Box sx={styles.closeTriggerBox}>
					<ButtonIcon
						icon={faCircleXmark}
						onClick={handleShow}
						iconFontSize='1.5rem'
						iconColor={theme.palette.primary.dark}
					/>
				</Box>

				<Typography variant='h6'>Modal</Typography>
				<Typography variant='h6'>estate id : {activeEstateId}</Typography>
			</Box>
		</Modal>
	);
};

export default ModalEstate;
