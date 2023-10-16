import SingleEstateCard from '@components/card/single-estate-card/SingleEstateCard';
import ModalEstate from '@components/modal/modal-estate/ModalEstate';
import { BreakpointEnum } from '@enums/theme.enum';
import useTheme from '@hooks/useTheme';
import useWindowSize from '@hooks/useWindowSize';
import { Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import useStyles from './style';

type PreviewPropsType = {
	activeEstateId: string;
	modalIsOpen: boolean;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Preview = ({
	activeEstateId,
	modalIsOpen,
	setModalIsOpen,
}: PreviewPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	return (
		<>
			{width >= BreakpointEnum.MD ? (
				<Box sx={styles.root}>
					<Box sx={styles.blockPage}>
						<SingleEstateCard
							activeEstateId={activeEstateId}
							limitDetails={200}
						/>
					</Box>
				</Box>
			) : (
				<ModalEstate
					isOpen={modalIsOpen}
					setModalIsOpen={setModalIsOpen}
					activeEstateId={activeEstateId}
				/>
			)}
		</>
	);
};

export default Preview;
