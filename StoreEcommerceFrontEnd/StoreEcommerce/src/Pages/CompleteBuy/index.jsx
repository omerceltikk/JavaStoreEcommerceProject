import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketData } from '../../Redux/Slices/basketSlice'
import BasketPageCard from '../../Components/BasketPageCard';
const CompleteBuy = () => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const status = useSelector((state) => state.baskets.status);
    const data = useSelector((state) => state.baskets)

    useEffect(() => {
        if (status == "idle") {
            dispatch(fetchBasketData());
        }
        if (status == "fulfilled") {
            const filteredData = data.baskets;
            setProducts(filteredData)
            let price = 0;
            console.log(filteredData)
            filteredData.map((item) => {
                price += (item.productPrice * item.productCount);
                setPrice(price);
            })
        }
    }, [dispatch, data])

    return (
        <div className='container pt-160'>
            <div className="row">
                <div className="col-6 col-lg-4">
                    <div className='mb-2'>
                        <div class="form-floating mb-3">
                            <input type="email" className="form-control rounded-3 border-secondary" id="floatingInput" placeholder="Home... " />
                            <label for="floatingInput">Address Header:</label>
                        </div>
                        <div class="form-floating">
                            <textarea className="form-control rounded-3 border-secondary w-100 customTextArea" id="floatingTextarea2" ></textarea>
                            <label for="floatingTextarea2">Address:</label>
                        </div>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class=" fs-6 text-secondary  fst-italic" for="flexCheckDefault">
                                By checking this box, you acknowledge that <p className='fw-bold'> you have read and agree to our Privacy Policy.</p>
                            </label>
                        </div>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class=" fs-6 text-secondary  fst-italic" for="flexCheckDefault">
                                This Privacy Policy outlines how [Company Name] <p className='fw-bold m-0 p-0'> collects, uses, protects, and discloses information gathered from users </p> of our website and services. This policy applies to website visitors and service users.
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="border rounded-3 border-secondary p-4">
                        <h5 class="card-title text-center mb-4 fw-bold text-secondary">Credit Card Information</h5>
                        <form>
                            <div class="mb-3">
                                <label for="cardNumber" class="form-label">Card Number</label>
                                <input type="text" class="form-control rounded-3 border-secondary" id="cardNumber" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="expiryDate" class="form-label">Expiry Date</label>
                                    <input type="text" class="form-control rounded-3 border-secondary" id="expiryDate" placeholder="MM/YY" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cvv" class="form-label">CVV</label>
                                    <input type="text" class="form-control rounded-3 border-secondary" id="cvv" placeholder="123" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="cardHolder" class="form-label">Card Holder</label>
                                <input type="text" class="form-control rounded-3 border-secondary" id="cardHolder" placeholder="John Doe" />
                            </div>
                        </form>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class=" fs-6 text-secondary " for="flexCheckDefault">
                            <p className='fw-bold m-0 p-0'>Enable 3D secure </p>
                        </label>
                    </div>
                </div>
                <div className="col-lg-4 border border-1 rounded-3 border-secondary p-4">
                    <div className='fs-5 fw-bold text-secondary text-end'>
                        Summary:
                        {
                            products.map((item) => (

                                <p className="fst-italic fw-semibold mt-3 ms-2 basketCardText"> {item.productCount} x {item.productName} </p>
                            ))
                        }
                    </div>
                    <div className=' mt-3 basketCardText fw-bold text-secondary text-end'>
                        Tracking Information: Once your order has been shipped, you will receive a confirmation email with tracking details. You can use this information to track your package's journey to your doorstep.
                    </div>
                    <div className=' mt-3 fs-5 fw-bold text-secondary text-end'>
                        Please Select Your Delivery:
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className='col-6'>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className=" fs-6 text-secondary " for="flexCheckDefault">
                                    <p className='fw-bold m-0 p-0 basketCardText'>DeliverX </p>
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className=" fs-6 text-secondary " for="flexCheckDefault">
                                    <p className='fw-bold m-0 p-0 basketCardText'>YSend</p>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className=" fs-6 text-secondary " for="flexCheckDefault">
                                    <p className='fw-bold m-0 p-0 basketCardText' >ZHelpCent</p>
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className=" fs-6 text-secondary " for="flexCheckDefault">
                                    <p className='fw-bold m-0 p-0 basketCardText'>Z Firm</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-3 basketCardText fw-semibold text-secondary text-end'>
                        If you have any questions or concerns about your shipment, feel free to contact our customer support team at [Customer Support Email] or [Customer Support Phone Number]. We are here to assist you every step of the way.                    </div>
                    <div className='fs-6 fw-bold text-secondary d-flex justify-content-end mt-3'>
                        Total Price:
                        <p className="fst-italic fw-semibold ms-2"> {price}$</p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className={`m-1 btn py-2 p-3 border border-1 rounded-2 border-secondary `}>Buy </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteBuy