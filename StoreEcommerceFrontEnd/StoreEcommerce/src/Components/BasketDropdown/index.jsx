import { useEffect, useState } from 'react'
import BasketDropdownCard from '../BasketDropdownCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketData } from '../../Redux/Slices/basketSlice';
import { Link } from 'react-router-dom';

const BasketDropdown = () => {
    const dispatch = useDispatch();
    const [basketProducts, setBasketProducts] = useState([]);
    const status = useSelector((state) => state.baskets.status);
    const data = useSelector((state) => state.baskets)


    useEffect(() => {
        if (status == "idle") {
            dispatch(fetchBasketData());
        }
        if (status == "fulfilled") {
            const filteredData = data.baskets;
            setBasketProducts(filteredData);
        }
    }, [dispatch, data])

    return (
        <div>
            <div className="dropdown">
                <button className="btn text-secondary basketIcon dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-bag-fill"></i>
                    <div className='position-absolute basketCount'>
                        {basketProducts.length}
                    </div>
                </button>
                <div className="dropdown-menu dropdown-menu-end basketDropdown mt-3">
                    <div className='container-fluid'>
                        {
                            basketProducts.map((item) => (
                                <BasketDropdownCard key={item.basketId} item={item} />
                            ))
                        }
                        <div className="row justify-content-end mt-3">
                            <div className=" d-flex justify-content-end mt-3">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <Link to={"/Basket"} className={`m-1 btn py-2 p-3 border border-1 rounded-2 basketCardText`}>Buy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BasketDropdown