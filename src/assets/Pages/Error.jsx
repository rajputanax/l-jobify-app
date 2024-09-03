import Wrapper from '../wrappers/ErrorPage'
import img from '../images/not-found.svg'
import back from '../images/back.svg'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)


  if (error.status === 404) {
    return <Wrapper>
      <div>
        <h3> {`Ohh! page not found ${error.status}`} </h3>
        <br />
        <br />
        <br />
        <img src={img} alt='not found-error' />

        <Link to='/' style={{ border: '1px solid', height: '50px', padding: '10px' }}> GO BACK</Link>

      </div>
    </Wrapper>


  }


  return (


    <Wrapper>
      <div>

        <h3>something went wrong 😒</h3>
        <br />
        <br />
        <br />
        <img src={back} alt='go-back' />
        <br />
        <br />
        <br />
        <Link to='/' style={{ border: '1px solid', height: '50px', padding: '10px' }} > GO BACK</Link>

      </div>

    </Wrapper>
  )
}

export default Error