import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Shop() {
    let [product , setProduct] = useState([]);
    let [category,setContegory] = useState([""]);
    let [loading,setLoading] = useState(true);
    async function fetchcategory() {
        try{
            await axios.get('https://dummyjson.com/products/categories').then((response)=>{
                console.log(response.data);
                setContegory(response.data);
            })
        }catch(e){
            console.log(e);
            
        }finally{
            setLoading(false);
        }
          
    }
    useEffect(()=>{
        fetchcategory();
      })
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((response)=>{
            console.log(response.data["products"]);
            setProduct(response.data["products"]);
            
        })
    })
    if(loading){
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(21, 228, 159, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}>
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          </div>
        );
    }
    return (
        <div>

            <div>
                {/* Modal */}
                <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="w-100 pt-1 mb-5 text-right">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form action method="get" className="modal-content modal-body border-0 p-0">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                                <button type="submit" className="input-group-text bg-success text-light">
                                    <i className="fa fa-fw fa-search text-white" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Start Content */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="h2 pb-4">Categories</h1>
                            <ul className="list-unstyled templatemo-accordion">
                                <li className="pb-3">
                                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" >
                                        Products
                                        
                                    </a>
                                    {category.map((value)=>{
                                        return(
                                            <ul className="collapse show list-unstyled pl-3">
                                        <li><Link className="text-decoration-none" to={`/ShopBycategory/${value.slug}`}>{value.name}</Link></li>
                                    </ul>
                                        );
                                    })}
                                    
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-inline shop-top-menu pb-3 pt-1">
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3">All</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="h3 text-dark text-decoration-none mr-3">Products</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="col-md-6 pb-4">
                                    <div className="d-flex">
                                        <select className="form-control">
                                            <option>Featured</option>
                                            <option>A to Z</option>
                                            <option>Item</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {product.map((value)=>{
                                    return(
                                        <div className="col-md-4">
                                    <div className="card mb-4 product-wap rounded-0">
                                        <div className="card rounded-0">
                                            <img className="card-img rounded-0 img-fluid" src={value.images} />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled">  
                                                    <li><Link className="btn btn-success text-white" to={`/Shopsingle/${value.id}`}><i className="far fa-heart" /></Link></li>
                                                    <li><Link className="btn btn-success text-white mt-2" to={`/Shopsingle/${value.id}`}><i className="far fa-eye" /></Link></li>
                                                    <li><Link className="btn btn-success text-white mt-2" to={`/Shopsingle/${value.id}`}><i className="fas fa-cart-plus" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <a href="shop-single.html" className="h3 text-decoration-none">{value.title}</a>
                                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                <li>{value.category}</li>
                                                <li className="pt-2">
                                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-muted fa fa-star" />
                                                    <i className="text-muted fa fa-star" />
                                                </li>
                                            </ul>
                                            <p className="text-center mb-0">{value.price}</p>
                                        </div>
                                    </div>
                                </div>
                                    );
                                })}
                                
                            </div>
                            <div div="row">
                                <ul className="pagination pagination-lg justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Content */}
                {/* Start Brands */}
                <section className="bg-light py-5">
                    <div className="container my-4">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">Our Brands</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="col-lg-9 m-auto tempaltemo-carousel">
                                <div className="row d-flex flex-row">
                                    {/*Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                            <i className="text-light fas fa-chevron-left" />
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                    {/*Carousel Wrapper*/}
                                    <div className="col">
                                        <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                            {/*Slides*/}
                                            <div className="carousel-inner product-links-wap" role="listbox">
                                                {/*First slide*/}
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End First slide*/}
                                                {/*Second slide*/}
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Second slide*/}
                                                {/*Third slide*/}
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Third slide*/}
                                            </div>
                                            {/*End Slides*/}
                                        </div>
                                    </div>
                                    {/*End Carousel Wrapper*/}
                                    {/*Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                            <i className="text-light fas fa-chevron-right" />
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Brands*/}
            </div>

        </div>
    )
}

export default Shop
