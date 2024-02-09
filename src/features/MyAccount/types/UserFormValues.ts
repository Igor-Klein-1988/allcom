export interface UserFormValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phoneNumber: string;
	companyName: string;
	position: string;
	taxNumber: string;
	address: {
		postIndex: string;
		city: string;
		street: string;
		houseNumber: string;
	};
	checked: boolean;
	blocked: boolean;
}
