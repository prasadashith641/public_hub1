import React from 'react'
import StoryViwer from '../../Components/StoryComponents/StoryViwer'

const Story = () => {

    const story=[
        {
            image:"https://images.pexels.com/photos/17778633/pexels-photo-17778633/free-photo-of-beverage-and-artificial-flower-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/9585588/pexels-photo-9585588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/16906079/pexels-photo-16906079/free-photo-of-a-goldendoodle-on-the-bed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/17908294/pexels-photo-17908294/free-photo-of-sea-beach-relaxation-blue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/8359052/pexels-photo-8359052.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]
  return (
    <div>
        <StoryViwer stories={story}/>
    </div>
  )
}

export default Story