import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonFill, BsPerson, BsCart, BsFileText, BsFileTextFill } from 'react-icons/bs';
import { CgHome } from 'react-icons/cg';
import { MdHomeFilled } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './BottomNavBar.scss'

const BottomNavBar = () => {

   const numberCart = useSelector((state) => state.numberCart)

    return (
        <div className='navContainer'>


            <Link to='/'><CgHome className='item' /> </Link>
            <Link to='/news'><BsFileText className='item' /></Link>
            <div className='cart-container'>

                <Link to='/cart'>

                    <BsCart className='content' />
                </Link>
                <span className='badge'>{numberCart}</span>


            </div>
            <Link to='/profile'><BsPerson className='item' /></Link>



        </div >
    )
}

export default BottomNavBar