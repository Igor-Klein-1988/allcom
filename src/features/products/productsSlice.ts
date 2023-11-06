import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductsState from './types/ProductsState';
import * as api from './api';

const initialState: ProductsState = {
	products: [],
};

export const loadProducts = createAsyncThunk(
	'products/loadProducts',

	() => api.getAll()
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		// .addCase(loadProducts.rejected, (state) => {
		//   state.status = 'failed';
		// })
	},
});

export default productsSlice.reducer;
