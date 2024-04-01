import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketData } from '../../Redux/Slices/basketSlice'
import BasketPageCard from '../../Components/BasketPageCard';
import { Link } from 'react-router-dom';
const BasketPage = () => {
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
            console.log(filteredData)
        }
    }, [dispatch, data])
    return (
        <div className='container pt-100'>
            {
                basketProducts.map((item) => (
                    <BasketPageCard key={item.basketId} item={item} />
                ))
            }
            <div className="row pt-5 justify-content-end" >
            <div className="col-2">
            <Link to={"/CompleteBuy"} className={`m-1 btn py-2 p-3 border border-1 border-secondary rounded-2 basketCardText w-100`}>Complete Buy</Link>
            </div>
            </div>
        </div>
    )
}

export default BasketPage