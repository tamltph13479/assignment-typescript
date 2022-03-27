import React from 'react'
import { ProductType } from '../types/Product';
type ProductListProps = {
    products: ProductType[];
}
const ProductList = ({ products }: ProductListProps) => {
    return (
        <div>
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    {/* Tab Nav */}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                    </ul>
                                    {/*/ End Tab Nav */}
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">

                                                {products?.map((product, index) => {
                                                    console.log(product)
                                                    return (
                                                        // <div className="col-3" key={index}>
                                                        //     <div className="card" >
                                                        //         <img src="..." className="card-img-top" alt="..." />
                                                        //         <div className="card-body">
                                                        //             <h5 className="card-title">{product.name}</h5>
                                                        //             <p className="block">{product.price}</p>
                                                        //             <a href={`/products/${product.id}`} className="btn btn-primary">Chi tiet</a>
                                                        //         </div>
                                                        //     </div>
                                                        // </div>
                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product" key={index}>
                                                                <div className="product-img">
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={product.img} alt="#" />
                                                                        <img className="hover-img" src={product.img} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                            <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{product.name}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>{product.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="women" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="kids" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="essential" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="prices" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop-services section home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-rocket" />
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-reload" />
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-lock" />
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-tag" />
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-newsletter section">
                <div className="container">
                    <div className="inner-top">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                                {/* Start Newsletter Inner */}
                                <div className="inner">
                                    <h4>Newsletter</h4>
                                    <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="EMAIL" placeholder="Your email address" required type="email" />
                                        <button className="btn">Subscribe</button>
                                    </form>
                                </div>
                                {/* End Newsletter Inner */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ProductList