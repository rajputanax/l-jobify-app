import  '../Styles/Landing.css';
import Wrapper from '../wrappers/LandingPage'
import Logo from '../../components/Logo'
import main from '../images/main.svg'
import {Link} from 'react-router-dom'

const Landing = () => {

  return (
    <Wrapper>


      <nav>
       <Logo/>
      </nav>
      <div className="container page">

        <div className="info">
          <h1>Job <span>Tracking </span>App</h1>
          <p>Keep track of your job applications easily and efficiently with our Job Tracking App.
            Whether you're applying for multiple positions
            or managing a job search strategy, this app helps you stay organized and on top of your progress.</p>

            <Link to='/register' className='btn register-link'>Register</Link>
            <Link to='/login' className='btn register-link'>Login / Demo</Link>
        </div>
        <img src={main} alt="" className='img main-img' />
       
      </div>
    
    </Wrapper>
  )
}

export default Landing