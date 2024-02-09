import UserDto, { UserApiResponse, UsersResponse } from './types/User';
import apiConfig from '../../apiConfig';
import { UserFormValues } from './types/UserFormValues';

interface ResponseData {
	message?: string;
}

export async function getUserProfile(): Promise<UserDto> {
	const res = await fetch(apiConfig.getUserProfileEndpoint, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return res.json();
}

export async function getUserById(user_id: number): Promise<UserDto> {
	const res = await fetch(`${apiConfig.getUserByIdEndpoint}${user_id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return res.json();
}

export async function getAllUsers(limit = 20, skip = 0): Promise<UserApiResponse> {
	const res = await fetch(`${apiConfig.getAllUsersEndpoint}?limit=${limit}&skip=${skip}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}

export async function changeCheckedStatus(user_id: number, status: boolean): Promise<UserDto> {
	const res = await fetch(
		`${apiConfig.changeUserCheckedStatusEndpoint}${user_id}?isChecked=${String(status)}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	return res.json();
}

export async function changeBlockedStatus(user_id: number, status: boolean): Promise<UserDto> {
	const res = await fetch(
		`${apiConfig.changeUserBlockedStatusEndpoint}${user_id}?isBlocked=${String(status)}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	return res.json();
}

export async function searchUser(email: string): Promise<UsersResponse> {
	const res = await fetch(`${apiConfig.findUserByEmailEndpoint}/${email}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}

export async function updateUser(user_id: number, data: UserFormValues): Promise<UserDto> {
	const formData = new FormData();
	formData.append('firstName', data.firstName);
	formData.append('lastName', data.lastName);
	formData.append('email', data.email);
	formData.append('phoneNumber', data.phoneNumber);
	formData.append('companyName', data.companyName);
	formData.append('position', data.position);
	formData.append('taxNumber', data.taxNumber);
	formData.append('address.postIndex', data.address.postIndex);
	formData.append('address.city', data.address.city);
	formData.append('address.street', data.address.street);
	formData.append('address.houseNumber', data.address.houseNumber);

	const res = await fetch(`${apiConfig.updateUserEndpoint}${user_id}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
		},
		body: formData,
	});

	if (res.status >= 400) {
		const jsonResponse: ResponseData = await res.json();
		const message = jsonResponse.message;
		throw new Error(message);
	}
	const response = await res.json();
	return response;
}
