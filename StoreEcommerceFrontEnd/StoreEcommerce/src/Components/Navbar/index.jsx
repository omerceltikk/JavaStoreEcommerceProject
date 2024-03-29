import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from "../../Redux/Slices/categorySlice";
import Loading from '../Loading';
const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const data = useSelector((state) => state.categories.status);
    const data2 = useSelector((state) => state.categories);
    const dispacth = useDispatch();
    useEffect(() => {
        if (data == "idle") {
            dispacth(fetchData());
        }
    }, [dispacth])
    if (data == "loading") {
        return (
            <>
                <Loading />
            </>
        )
    }
    if (data == "failed") {
        return (
            <>
                <div>failed</div>
            </>
        )
    }
    if (data == "fulfilled") {
        console.log(JSON.stringify(data2))
    }
    return (
        <div className='position-relative'>
            <div className={`position-fixed ${expand ? "customOpenNavbar" : "customNavbarStyle"}`}>
            <nav className="navbar navbar-expand-lg bg-transparent m-5 mt-3 rounded-3 border">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className={`${expand ? "d-flex" : "d-none"}`}role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className='btn' onClick={() => setExpand(!expand)}>press</div>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar