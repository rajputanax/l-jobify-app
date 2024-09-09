import React from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { FaUserCircle, FaCaretDown , FaCaretUp } from 'react-icons/fa'
import { useState } from 'react'
import { useDashBoardContext } from '../assets/Pages/DashboardLayout'

const LogoutContainer = () => {
    const [showLogOut, setShowLogout] = useState(false)
    const { user, logoutUser } = useDashBoardContext()
    return (
        <Wrapper>
            <button type="button"
                className='btn logout-btn'
                onClick={() => setShowLogout(!showLogOut)} >
                <FaUserCircle />
                {user?.name}
                {!showLogOut?  <FaCaretDown />  : <FaCaretUp /> }
                <div className={showLogOut ? 'show-dropdown dropdown ':' dropdown'}>
                    <button type="button" className='dropdown-btn' onClick={logoutUser}>Logout</button>
                </div>

            </button>
        </Wrapper>
    )
}

export default LogoutContainer