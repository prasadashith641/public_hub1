import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div>
        <div className='post w-60 h-60'> 
           <img className='cursor-pointer' src='https://cdn.pixabay.com/photo/2020/11/04/01/16/couple-5711220_640.jpg' alt='' />
           <div className='overlay'>
            <div className='overlay-text flex justify-between'>
                <div>
                    <AiFillHeart></AiFillHeart> <span>1000</span>
                </div>
                <div><FaComment/><span>30</span></div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard