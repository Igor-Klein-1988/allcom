// eslint-disable-next-line import/default
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { loadProducts } from './productsSlice';
import Baner from './baner/Baner';

const Products: React.FC = (): JSX.Element => {
	const products = useAppSelector((state: RootState) => state.products.products);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, []);
	return (
		<main className="main__content_wrapper">
			<Baner /> <br />
			<br />
			{/* <!-- Start product section --> */}
			<section className="product__section section--padding pt-0">
				<div className="container-fluid">
					<div className="section__heading text-center mb-35">
						<h2 className="section__heading--maintitle">Products</h2>
					</div>
					<div className="tab_content">
						<div id="featured" className="tab_pane active show">
							<div className="product__section--inner">
								<div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
									{products.map((product) => (
										<div key={product.id} className="col mb-30">
											<div className="product__items">
												<div className="product__items--thumbnail">
													<a className="product__items--link" href="product-details.html">
														<img
															src={product.image}
															className="product__items--img product__primary--img"
															alt="product-img"
														/>
													</a>
												</div>
												<div className="product__items--content">
													<span className="product__items--content__subtitle">{product.title}</span>
													<div className="product__items--content__title">
														<a href="product-details.html">{product.category}</a>
													</div>
													<div className="product__items--price">
														<span className="current__price">${product.price}</span>
													</div>
													<ul className="product__items--action d-flex">
														<li className="product__items--action__list">
															<a
																className="product__items--action__btn add__to--cart"
																href="cart.html"
															>
																<svg
																	className="product__items--action__btn--svg"
																	xmlns="http://www.w3.org/2000/svg"
																	width="22.51"
																	height="20.443"
																	viewBox="0 0 14.706 13.534"
																>
																	<g transform="translate(0 0)">
																		<g>
																			<path
																				data-name="Path 16787"
																				d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
																				transform="translate(0 -463.248)"
																				fill="currentColor"
																			></path>
																			<path
																				data-name="Path 16788"
																				d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
																				transform="translate(-1.191 -466.622)"
																				fill="currentColor"
																			></path>
																			<path
																				data-name="Path 16789"
																				d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
																				transform="translate(-2.875 -466.622)"
																				fill="currentColor"
																			></path>
																		</g>
																	</g>
																</svg>
																<span className="add__to--cart__text"> + Add to cart</span>
															</a>
														</li>
														<li className="product__items--action__list">
															<a className="product__items--action__btn" href="wishlist.html">
																<svg
																	className="product__items--action__btn--svg"
																	xmlns="http://www.w3.org/2000/svg"
																	width="25.51"
																	height="23.443"
																	viewBox="0 0 512 512"
																>
																	<path
																		d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
																		fill="none"
																		stroke="currentColor"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth="32"
																	></path>
																</svg>
																<span className="visually-hidden">Wishlist</span>
															</a>
														</li>
														<li className="product__items--action__list">
															<a
																className="product__items--action__btn"
																data-open="modal1"
																href="javascript:void(0)"
															>
																<svg
																	className="product__items--action__btn--svg"
																	xmlns="http://www.w3.org/2000/svg"
																	width="25.51"
																	height="23.443"
																	viewBox="0 0 512 512"
																>
																	<path
																		d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
																		fill="none"
																		stroke="currentColor"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth="32"
																	/>
																	<circle
																		cx="256"
																		cy="256"
																		r="80"
																		fill="none"
																		stroke="currentColor"
																		strokeMiterlimit="10"
																		strokeWidth="32"
																	/>
																</svg>
																<span className="visually-hidden">Quick View</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Products;
