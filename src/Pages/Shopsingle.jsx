import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Shopsingle() {
  let [product,setProduct] = useState([]);
  let id = useLocation().pathname.split('/')[2]
  console.log(id);
  
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
      console.log(response.data);
      setProduct(response.data);
      
    })
  },[])
  return (
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
      {/* Open Content */}
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img className="card-img img-fluid" src={product.images} alt="Card image cap" id="product-detail" />
              </div>
              <div className="row">
                {/*Start Controls*/}
               
                {/*End Controls*/}
                {/*Start Carousel Wrapper*/}
                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  {/*Start Slides*/}
                 
                  {/*End Slides*/}
                </div>
                {/*End Carousel Wrapper*/}
                {/*Start Controls*/}
                
                {/*End Controls*/}
              </div>
            </div>
            {/* col end */}
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{product.title}</h1>
                  <p className="h3 py-2">{product.price}</p>
                  <p className="py-2">
                    
                    <span className="list-inline-item text-dark">Rating {product.rating}</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>{product.brand}</strong></p>
                    </li>
                  </ul>
                  <h6>Description:</h6>
                  <p>{product.description}</p>
                 
                  {/* <h6>Specification:</h6>
                  <ul className="list-unstyled pb-3">
                    <li>Lorem ipsum dolor sit</li>
                    <li>Amet, consectetur</li>
                    <li>Adipiscing elit,set</li>
                    <li>Duis aute irure</li>
                    <li>Ut enim ad minim</li>
                    <li>Dolore magna aliqua</li>
                    <li>Excepteur sint</li>
                  </ul> */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Close Content */}
      {/* Start Article */}
      
      {/* End Article */}
    </div>

  )
}

export default Shopsingle
