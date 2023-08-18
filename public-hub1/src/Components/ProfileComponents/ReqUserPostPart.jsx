import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from "react-icons/bi"
import ReqUserPostCard from './ReqUserPostCard'


const ReqUserPostPart = () => {
    const [activeTab,setActiveTab]=useState()
    const tabs=[
        {
            tab:'Post',
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab:""
        },
        {
            tab:"Reels", tcon:<RiVideoAddLine></RiVideoAddLine>
        }, 
        {
            tab:"Saved", icon:<BiBookmark/>},{
              tab:"Tagged",
              icon:<AiOutlineUser></AiOutlineUser>

            }
        
    ]
  return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((items)=>   <div onClick={()=>setActiveTab(items.tab)} className={`${activeTab===items.tab?"border-t border-black":"opacity-60"}flex items-center cursor-pointer py-2 text-sm`}>
<p>{items.icon}</p>
<p className='ml-1'>{items.tab}</p>
            </div>
            )}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1,1].map((items)=><ReqUserPostCard/>)}
                </div>
            </div>
         
        </div>

    
  )
}

export default ReqUserPostPart