import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchOrdersData } from '../../Redux/Slices/ordersSlice';
import { fetchFavoritesData } from '../../Redux/Slices/favoritesSlice';
import BasketDropdownCard from '../../Components/BasketDropdownCard';
import ProfileFavoritesCard from '../../Components/ProfileFavoritesCard';


const ProfilePage = () => {
    const [currUser, setCurrUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [orders, setOrders] = useState([]);

    const userData = useSelector((state) => state.users);
    const favoritesData = useSelector((state) => state.favorites);
    const ordersData = useSelector((state) => state.orders)

    const favoritesDataStatus = useSelector((state) => state.favorites.status);
    const ordersDataStatus = useSelector((state) => state.orders)

    const dispacth = useDispatch();

    useEffect(() => {
        setCurrUser(userData.users[0])
    }, [userData])

    useEffect(() => {
        if (favoritesDataStatus == "idle") {
            dispacth(fetchFavoritesData());
        }
        if (favoritesDataStatus == "fulfilled" && favoritesData.favorites.length > 0) {
            setFavorites(favoritesData.favorites);
        }
    }, [favoritesData, favoritesDataStatus])

    useEffect(() => {
        if (ordersDataStatus == "idle") {
            dispacth(fetchOrdersData());
        }
        if (ordersDataStatus == "fulfilled" && ordersData.orders.length > 0) {
            setOrders(ordersData.orders);
        }
    }, [ordersData, ordersDataStatus])
    return (
        <div className='container pt-120'>
            <div className="row">
                <div className="col-6 ">
                    <div className='mb-2'>
                        <div className='mb-3 p-3 border rounded-3 d-flex border-1 border-secondary' >
                            <img src="" alt="" />
                            <div className=' text-secondary fw-semibold fst-italic'>
                                {currUser?.userName}
                            </div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control rounded-3 border-secondary w-100 customTextArea" id="floatingTextarea2" ></textarea>
                            <label htmlFor="floatingTextarea2">Address:</label>
                        </div>
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="border rounded-3 border-secondary p-4">
                        <h5 className="card-title text-center mb-4 fw-bold text-secondary">Favorites</h5>

                        {
                            favorites.map((item) => <ProfileFavoritesCard key={item.favoritesId} item={item}/>)
                        }
                    </div>

                </div>
                <div className=" border border-1 rounded-3 border-secondary p-4 m-2 mt-4">
                    <div className='fs-5 fw-bold text-secondary'>
                        Order History
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage