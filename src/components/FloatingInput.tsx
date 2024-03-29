import { FC, useEffect, useState } from 'react';
import { useFormikContext, Field } from 'formik';

type FloatingInputProps = {
	id: string;
	name: string;
	placeholder: string;
	type: string;
	step?: string;
	value?: string | number;
};

const FloatingInput: FC<FloatingInputProps> = ({ id, name, placeholder, type, step, value }) => {
	const formik = useFormikContext();
	const [isValidationTriggered, setIsValidationTriggered] = useState(false);
	const isInvalid =
		formik.errors[name as keyof typeof formik.errors] &&
		formik.touched[name as keyof typeof formik.touched];
	const isValid = !isInvalid && isValidationTriggered;

	useEffect(() => {
		if (isInvalid) {
			setIsValidationTriggered(true);
		}
	}, [isInvalid]);

	const handleBlur = (): void => {
		formik.setFieldTouched(name, true);
	};

	return (
		<div className="floating_input form-floating">
			<Field
				type={type}
				step={step}
				className={`floating_input--field form-control ${isInvalid ? 'is-invalid' : ''} ${
					isValid ? 'is-valid' : ''
				}`}
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onFocus={handleBlur}
				onBlur={handleBlur}
			/>
			<label htmlFor={id} className="floating_input--placeholder">
				{placeholder}
			</label>
		</div>
	);
};

export default FloatingInput;
