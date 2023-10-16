import SingleEstateCard from '@components/card/single-estate-card/SingleEstateCard';
import ModalEstate from '@components/modal/modal-estate/ModalEstate';
import { BreakpointEnum } from '@enums/theme.enum';
import useWindowSize from '@hooks/useWindowSize';
import { Dispatch, SetStateAction } from 'react';

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
	const { width } = useWindowSize();

	return (
		<>
			{width >= BreakpointEnum.MD ? (
				<SingleEstateCard activeEstateId={activeEstateId} />
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
