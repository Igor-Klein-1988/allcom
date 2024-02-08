import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import CrossIcon from '../../img/svg/cross.svg?react';
import Button from '../Button/Button';

interface ModalProps {
	confirmationModalActive: boolean;
	setConfirmationModal: (flag: boolean) => void;
	text: string;
	onConfirm: (confirmed: boolean) => void;
	value?: string;
}
const ConfirmationModal: FC<ModalProps> = ({
	confirmationModalActive,
	setConfirmationModal,
	text,
	onConfirm,
	value,
}): JSX.Element | null => {
	const { t } = useTranslation('confirmation_modal');

	const handleClick = (selection: boolean): void => {
		onConfirm(selection);
		setConfirmationModal(false);
	};

	if (!confirmationModalActive) {
		return <div className="confirmation_modal"></div>;
	}

	return (
		<div
			className="confirmation_modal confirmation_modal--active"
			onClick={() => {
				setConfirmationModal(false);
			}}
		>
			<div className="confirmation_modal__content" onClick={(e) => e.stopPropagation()}>
				<CrossIcon
					className="confirmation_modal__content--cross_icon"
					onClick={() => setConfirmationModal(false)}
				/>
				<p className="confirmation_modal__text">
					{text} <strong>{value}</strong>
				</p>
				<div className="confirmation_modal__buttons">
					<Button
						btnValue={true}
						text={t('yes')}
						onClickBtn={() => handleClick(true)}
						isConfirm={true}
						widthBtn="15rem"
						heightBtn="5rem"
					/>
					<Button
						btnValue={false}
						text={t('no')}
						onClickBtn={() => handleClick(false)}
						widthBtn="15rem"
						heightBtn="5rem"
					/>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
