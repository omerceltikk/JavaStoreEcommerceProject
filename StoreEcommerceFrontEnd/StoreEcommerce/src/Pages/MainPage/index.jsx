import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MainPage = () => {
  const dispatch = useDispatch();
  const currUserData = useSelector((state) => state.users); 
  


  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 m-0">
        <div className='p-0 m-0'>
          <img className='img-fluid' src="../../../assets/main3.jpg" alt="" />

        </div>

      </div>
    </div>

  )
}

export default MainPage