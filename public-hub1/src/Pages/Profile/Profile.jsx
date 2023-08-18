import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-10 border'>
        <div className=''>
            <ProfileUserDetails/>
        </div>
        <div>
          <ReqUserPostPart/>
        </div>
    </div>
  )
}

export default Profile