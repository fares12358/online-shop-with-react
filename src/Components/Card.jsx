import React from 'react'
import '../Style/card.css'
import { useAuth } from "./AuthContext"; // Import useAuth hook
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const { isLogged } = useAuth();
  const { setCart } = useAuth();
  const { Cart } = useAuth();
  const navigate = useNavigate();

  function buyNow(k){
    if(isLogged){
      setCart([...Cart,k])
    }else{
      alert("please sign in first")
      navigate("/sign");
    }
  }

  return (
    <>
      <div className="card-holder text-center">
        <div className="image">
          <img className='img-fluid' src={props.img} alt="not found" />
        </div>
        <p className="description mt-2">{props.prodName}</p>
        <div className='price'>{props.price} L.E</div>
        <button className='buy btn btn-primary px-4 py-1 fw-bold main-btn mt-2'
        onClick={()=>buyNow(props.k)} >add to cart</button>
      </div>
    </>
  )
}

export default Card