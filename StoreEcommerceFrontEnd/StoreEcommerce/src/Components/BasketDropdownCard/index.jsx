import React from 'react'
import { FetchDeleteMethod } from '../../Redux/FetchServices'
const BasketDropdownCard = ({ item }) => {

    const handleDeleteBasketItem = () => {
        FetchDeleteMethod("baskets",item.basketId);

    }
    return (
        <div className='row px-3 py-4 m-0 align-items-center text-center border-bottom border-1 border-secondary'>
            <div className="col-3 basketCardImage">
                <img className='img-fluid' src="../../../assets/productsimage3.jpg" alt="" />
            </div>
            <div className="col-3 fs-6 customCardText">
                {item.productName}
            </div>
            <div className="col-3 fw-bold fs-6 text-secondary basketCardText text-center">
                {item.productCount * item.productPrice}$
            </div>
            <div onClick={() => handleDeleteBasketItem()} className="col-3 fs-6 hoverDarkEffect text-secondary ">
                <i className="bi bi-trash"></i>
            </div>
        </div>

    )
}

export default BasketDropdownCard