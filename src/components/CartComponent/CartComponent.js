import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './CartComponent.scss'
import { useSelector } from 'react-redux';
import {BsTrash} from 'react-icons/bs'

const CartComponent = (props) => {
    const counter = useSelector((state) => state.numberCart);


    
    return (
        <div className='cart-comp-container'>

            <img src={props.img} className='cart-img' />



            <div className='cart-section'>

                <section className='cart-content'>
                    <p className='cart-title'>{props.title}</p>
                    <p className='cart-text'>{props.subTitle}</p>
                    <p className='cart-price'>${props.price}</p>



                </section>


                <div className='right-container'>
                   <BsTrash className='recycle' onClick={props.click}/>
                    <div className='counter-container'>
                        <AiOutlinePlus className='plus' onClick={props.pClick} />
                        <p className='counter'>1</p>
                        <AiOutlineMinus className='minos' onClick={props.mClick} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartComponent