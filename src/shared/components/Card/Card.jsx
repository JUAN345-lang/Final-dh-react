
import { BsFillPersonFill} from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import './card.css'

export const Card = ({ rate, rateDescription, model, location, description }) => {
  return (
    <div className="card-container">
      <section className='img-container'>
        <img src="https://rently.blob.core.windows.net/hertz/CarModel/26756080-0e17-4e05-8e6a-fa67489347fe.jpg" alt="" />
      </section>
      <section className='card-content'>
        
        <div className="rate-content">
          <span>Premium </span>
          <div className='rate-description'>
            <span className='rate'>{ rate }</span>
            <span>{ rateDescription }</span>
          </div>
        </div>
        
        <h1 className='card-title'>{ model }</h1>
        
        <div className='details-container'>
          <div className='details-item'>
            <BsFillPersonFill className='item-icon' />
            <span>Passenger capacity: </span>
            <span className='item-rate'>{ rate }</span>
          </div>
          <div className='details-item'>
            <MdLocationOn className='item-icon' />
            <span>{ location }</span>
          </div>
        </div>

        <div className='description'>
          <span className='description-text'>{ description }</span>
        </div>
       
      </section>

    </div>
    )
}