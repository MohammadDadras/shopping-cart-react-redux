import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCartComponent.scss'
import { BsHeart } from 'react-icons/bs';


const HomeCartComponent = (props) => {

    return (
        <div className='home-cart-section'>
            <Link to={`product/${props.product}`}>
            <img src={props.img} className='home-cart-img' />
            </Link>
            

            <div className='content-container'>
                <section className='home-cart-content'>
                    <p className='home-cart-title'>{props.title}</p>
                    <p className='home-cart-text'>${props.price}</p>

                </section>
                <BsHeart className='cart-heart' />

            </div>

        </div>
    )
}

export default HomeCartComponent