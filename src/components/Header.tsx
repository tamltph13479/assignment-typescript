import React from 'react'
import Nav from './Nav'
import Seach from './Seach'

type Props = {}

const Header = (props: Props) => {
    return (
        // <header>
        //     <div className="logo text-center">
        //         <img src="https://picsum.photos/130/40" alt="" />
        //     </div>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="#">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon" />
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <Nav />
        //                 <Seach />

        //             </div>
        //         </div>
        //     </nav>

        // </header>
        <>
            <header className="header shop">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-12">
                                {/* Top Left */}
                                <div className="top-left">
                                    <ul className="list-main">
                                        <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                                        <li><i className="ti-email" /> support@shophub.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-12">
                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-location-pin" /> Store location</li>
                                        <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                                        <li><i className="ti-user" /> <a href="#">My account</a></li>
                                        <li><i className="ti-power-off" /><a href="login.html#">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                {/* Logo */}
                                <div className="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                                {/*/ End Logo */}
                                {/* Search Form */}
                                <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                                    {/* Search Form */}
                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search" />
                                            <button value="search" type="submit"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                    {/*/ End Search Form */}
                                </div>
                                {/*/ End Search Form */}
                                <div className="mobile-nav" />
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">
                                        <form>
                                            <input name="search" placeholder="Search Products Here....." type="search" />
                                            <button className="btnn"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">
                                    {/* Search Form */}
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                    </div>
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></a>
                                        {/* Shopping Item */}
                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Items</span>
                                                <a href="#">View Cart</a>
                                            </div>
                                            <ul className="shopping-list">
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Woman Ring</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                </li>
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Woman Necklace</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                </li>
                                            </ul>
                                            <div className="bottom">
                                                <div className="total">
                                                    <span>Total</span>
                                                    <span className="total-amount">$134.00</span>
                                                </div>
                                                <a href="checkout.html" className="btn animate">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark text-white">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="all-category">
                                        <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true" />CATEGORIES</h3>
                                        <ul className="main-category ">
                                            <li><a href="#" className="nav-link active">accessories</a></li>
                                            <li><a href="#" className="nav-link active">top 100 offer</a></li>
                                            <li><a href="#" className="nav-link active">sunglass</a></li>
                                            <li><a href="#" className="nav-link active">watch</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">
                                            <div className="nav-inner">
                                                <ul className="nav main-menu menu navbar-nav">
                                                    <li className="active"><a href="#">Home</a></li>
                                                    <li><a href="#">Product</a></li>
                                                    <li><a href="#">Service</a></li>
                                                    <li><a href="#">Shop<i className="ti-angle-down" /><span className="new">New</span></a>
                                                        <ul className="dropdown">
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Pages</a></li>
                                                    <li><a href="#">Blog<i className="ti-angle-down" /></a>
                                                        <ul className="dropdown">
                                                            <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="container text-right">
                    <img src="https://insieutoc.vn/wp-content/uploads/2021/02/cac-mau-banner-dep.jpg " width="966" alt="" />
                </div>





            </header>


        </>

    )
}

export default Header