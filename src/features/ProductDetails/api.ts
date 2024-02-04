import apiConfig from '../../apiConfig';
import { ProductDto } from '../../types/product/ProductApiResponse';

interface ResponseData {
	message?: string;
}

export async function getProduct(product_id: number): Promise<ProductDto> {
	const res = await fetch(`${apiConfig.getProductByIdEndpoint}${product_id}`);

	if (res.status >= 400) {
		const jsonResponse: ResponseData = await res.json();
		const message = jsonResponse.message;
		throw new Error(message);
	}
	const response = await res.json();
	return response;
}
