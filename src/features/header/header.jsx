import logoDark from '../../assets/logo-dark.svg'
import './header.css'

export const HeaderComponent = () => {

  return (
    <div className="header-container">
      <div className='logo-container'>
      <img className='logo-app' src={logoDark} alt="" srcset="" />
      </div>

      <div className='button-options'>
        <button className='button'>Login</button>
        <button className='button'>Create</button>
      </div>
    </div>
  )
}