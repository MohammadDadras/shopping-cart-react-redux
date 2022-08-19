import React, { useEffect } from 'react'
import './Cart.scss'
import { AiOutlineCheck } from 'react-icons/ai';
import profile from '../../assets/Images/cart-5.jpg'
import { BsFillGridFill } from 'react-icons/bs';
import CartComponent from '../../components/CartComponent/CartComponent';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Action/CartAction';
import { increaseQuantity } from '../../redux/Action/CartAction';
const Cart = () => {



  const params = useParams()

  const productId = params.id
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart
  console.log(cartItems)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId))
    }
  }, [dispatch, productId])

  const removeFromCartHandler = (id) => {

    dispatch(removeFromCart(id))

  }

  const addToCartHandler = () => {

    dispatch(increaseQuantity())

  }
  return (
    <div className='cart-container'>

      <div className='cart-header'>
        <BsFillGridFill className='menu' />
        <p className='title'>Card</p>
        <img src={profile} className='profileImg' />

      </div>
      {cartItems.length === 0 ? (<h2 style={{ textAlign: 'center', marginTop: '250px', color: '#a0001e' }}>سبد خرید خالی است</h2>) :
        <div>
          {cartItems.map((item, index) => {
            return <CartComponent img={item.img} title={item.title} subTitle={item.subTitle} price={item.price} click={() => removeFromCartHandler(item.product)} pClick={addToCartHandler} />
          })}

          <div className='total-container'>

            <section className='totla-section'>
              <p className='total-title'>Total</p>
              <p className='total'>${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
            </section>

            <button className='totla-btn'>Pay Now</button>
          </div>
        </div>
      }

    </div>
  )
}

export default Cart