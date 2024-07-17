import React from 'react'
import '../Style/card.css'
const Card = () => {

  const chickbuy=()=>{

  }



  return (
    <>
      <div className="card-holder text-center">
        <div className="image">
          <img className='img-fluid' src={require('../img/image-productes/g1.png')} alt="not found" />
        </div>
        <p className="description">iPhone 13 Pro - Transparent
        LKR 499</p>
        <div className='price'>100 L.E</div>
        <button className='buy btn btn-primary px-4 py-1 fw-bold main-btn mt-2' onClick={chickbuy}>add to cart</button>
      </div>
    </>
  )
}

export default Card