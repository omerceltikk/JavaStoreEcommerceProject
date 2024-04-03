import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading';
const MainPage = () => {
  const dispatch = useDispatch();
  const currUserData = useSelector((state) => state.users);
  const categoriesData = useSelector((state) => state.products)

  if (categoriesData.status == "loading") {
    return (
      <Loading />
    )
  }


  return (
    <div>
      <div className="mainBg1">
        <div>
          <div className="container">
            <div className="row p-0 m-0 pb-5 pb-lg-0 align-items-end align-items-lg-center height-100">
              <div className='col-12 col-lg-6 p-0 m-0'>

                <div className={`display-1 fw-bold text-secondary textAnimation`}>
                  Discover Your Style, Define Your Story
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBg2">
        <div className="container">
          <div className="row p-0 m-0 align-items-center height-100 justify-content-lg-end">
            <div className='col-12 col-lg-6 p-0 m-0'>

              <div className='display-1 text-lg-end fw-bold text-secondary textAnimation'>
                Where Trends Meet Timeless Elegance
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBg3">
        <div className="container">
          <div className="row p-0 m-0 align-items-lg-center height-100">
            <div className='col-12 col-lg-6 p-0 m-0'>

              <div className='display-1 fw-bold pt-5 pt-lg-0 text-secondary textAnimation'>
                Style That Speaks Volumes
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBg4">
        <div className="container">
          <div className="row p-0 m-0 align-items-lg-end height-100">
            <div className='col-12 pb-lg-4 p-0 m-0'>
              <div className='display-1 pt-5 pt-lg-0 fw-bold text-secondary textAnimation'>
                Discover Your Style, Define Your Story
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage