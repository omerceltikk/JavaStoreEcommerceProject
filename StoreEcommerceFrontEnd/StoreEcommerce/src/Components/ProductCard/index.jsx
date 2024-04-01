import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({ item }) => {
    console.log(item)
    return (

        <div className="col-12 col-md-6 col-xl-3 pt-5">
            <div className="card border-0 ">
                <Link to={`/products/${item.productId}`} item={item}>
                <img src="..." className="card-img-top" alt="..." />
                </Link>
                <div className="card-body border border-1 border-secondary rounded-4">
                    
                    <Link to={`/products/${item.productId}`} className='card-title fw-bold fs-5 text-decoration-none'>{item.productName}</Link>
                    <div className='d-flex py-1 gap-2' >
                        <p className='pe-2 p-1 border border-1 rounded-2 customCardText'>%{item.discountPercent} discount</p>
                        <p className='p-1 border border-1 rounded-2 customCardText'>{item.primeCategory}</p>
                    </div>
                    <div className='d-flex'>
                        <p className="card-text px-1 fs-4">{item.discountPrice}$</p>
                        <p className="card-text px-1 fs-6 text-decoration-line-through fst-italic">{item.productPrice }$</p>
                    </div>

                    <Link className='fst-italic text-underline text-secondary justify-content-end d-flex align-items-center p-0'>
                        <i class="bi bi-plus-circle p-1"></i>
                        {/* bi-check2-circle */}
                        <p className='p-0 m-0'>Add Basket</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ProductCard