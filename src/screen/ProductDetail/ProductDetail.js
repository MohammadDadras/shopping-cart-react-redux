import React, { useEffect } from 'react'
import './ProductDetail.scss'
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { BsHeart, BsCartFill } from 'react-icons/bs';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { productDetailAction } from '../../redux/Action/ProductAction';
import { useNavigate } from 'react-router';
const ProductDetail = ({ history }) => {


    const dispatch = useDispatch()

    const productDetail = useSelector((state) => state.productDetail)

    const { loading, product } = productDetail
    const params = useParams()
    // const product = CartData.find((item) => {
    //     return item.id === params.id
    // })

    const navigate = useNavigate()


    useEffect(() => {
        dispatch(productDetailAction(params.id))
    }, [dispatch, params])

    const addToProductHandler = () => {
        navigate(`/cart/${params.id}`)
    }
    return (


        <div className='cart-detail-con'>

            {loading ? (<h2>در حال دریافت محصولات ...</h2>) :
                <div>
                    <div style={{ backgroundImage: `url(${product.img})` }}
                        className='header-detail img'>
                        <AiOutlineLeftCircle className='left-arrow' />
                        <BsHeart className='detail-heart' />
                    </div>
                    <div className='main-detail '>

                        <section className='detail-content'>
                            <p className='detail-title'>{product.title}</p>
                            <p className='detail-text'>{product.subTitle}</p>
                        </section>
                        <p className='detail-price'>${product.price}</p>
                    </div>

                    <p className='detail-description'>{product.description}</p>

                    <div className='submit-container'>
                        <button onClick={addToProductHandler} className='btn'>Buy Now</button>
                        <BsCartFill className='cart-icon' />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetail