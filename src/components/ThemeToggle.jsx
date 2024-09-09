import React from 'react'
import Wrapper from '../assets/wrappers/ThemeToggle';
import {useDashBoardContext} from '../assets/Pages/DashboardLayout'
import { BsFillSunFill , BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const {isDarkTheme , toggleDarkTheme} = useDashBoardContext()
  return (
      <Wrapper onClick={toggleDarkTheme}>
         
              {isDarkTheme ? <BsFillSunFill className='toggle-icon ' /> : <BsFillMoonFill className='toggle-icon'  />}
          

      </Wrapper>
  )
}

export default ThemeToggle