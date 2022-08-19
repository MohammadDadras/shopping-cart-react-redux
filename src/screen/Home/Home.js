import React, { useEffect } from 'react'
import { BsFillGridFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { BsSliders } from 'react-icons/bs';
import profile from '../../assets/Images/cart-5.jpg'
import header from '../../assets/Images/header.jpg'
import './Home.scss'
import { useDispatch , useSelector} from 'react-redux';
import HomeCartComponent from '../../components/HomeCart/HomeCartComponent';


import { productListAction } from '../../redux/Action/ProductAction';
const Home = () => {

  

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, products } = productList

  useEffect(() => {

    dispatch(productListAction())

  }, [dispatch])



  return (
    <div className='home-container'>
      <div className='header'>
        <BsFillGridFill className='menu' />

        <section className='profileName'>
          <p className='title'>Hello Zaskia</p>
          <p className='content'>Jakarta Ina</p>
        </section>
        <img src={profile} className='profileImg' />

      </div>

      <div className='search-bar'>
        <i className='icon'><BiSearch /></i>
        <input className='search' />
        <BsSliders className='filter' />
      </div>

      <div className='banner'>

        <img src={header} className='banner-img' />

        <section className='baner-content'>
          <p className='banner-title'>Big Sale</p>
          <p className='banner-text'>get the trandy</p>
          <p className='banner-text'>fashio at the discount</p>
          <p className='banner-text'>of up to 50%</p>
        </section>
      </div>

      {loading ? (<h2>در حال دریافت محصولات ...</h2>) :
        <div className='cart-container'>
          {products.map((item, index) => {

            return <HomeCartComponent title={item.title} price={item.price} img={item.img} product={item.id} />


          })}

        </div>
      }

    </div>
  )
}

export default Home