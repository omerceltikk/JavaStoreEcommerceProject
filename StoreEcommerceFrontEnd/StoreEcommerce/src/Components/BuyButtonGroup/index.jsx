import React from 'react'

const BuyButtonGroup = () => {
    return (
        <div className="row justify-content-end mt-3">
            <div className=' mt-3 ps-5 text-end fw-bold text-secondary fs-5'>
                Buy.
            </div>
            <div className="col-6 d-flex justify-content-end mt-3">
                <div className="btn-group " role="group" aria-label="Basic example">
                    <div className={`m-1 btn py-2 p-3 border border-1 rounded-2 `}>Add To Cart</div>
                    <div className={`m-1 btn py-2 p-3 border border-1 rounded-2 `}>Buy Directly</div>
                </div>
            </div>
        </div>
    )
}

export default BuyButtonGroup