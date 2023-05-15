import '../styles/search.css'
import { MdLocationOn } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { DateRangePickerComponent } from '../../utils/components/datepicker/datepicker'

export const SearchComponent = () => {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Dispatch event search")
  }

  return (
    <form className="container" onSubmit={handleSubmit} >
      <div className='form-control'>
      
      <section className='section-content'>
      <label> Delicery place</label>
      <div className='search-item'>
        <div className='icon-container'>
          <MdLocationOn className='search-icon' />
        </div>
        <input type="text" placeholder='Search location to show available cars ...' />
        <div className='divider'></div>
        <div className='dropdown-container'>
          <RiArrowDropDownLine />
        </div>
      </div>
      </section>

      <section className='section-content'>
      <label> Receive place</label>
      <div className='search-item'>
        <div className='icon-container'>
          <MdLocationOn className='search-icon' />
        </div>
        <input type="text" placeholder='Search location to show available cars ...' />
        <div className='divider'></div>
        <div className='dropdown-container'>
          <RiArrowDropDownLine />
        </div>
      </div>
      </section>
      


      <section className='date-container'>
        <div className='section-content'>
        <label> Delivery Date / Return Date</label>
        <DateRangePickerComponent />
        </div>
      
      </section>
    </div>

      <input type='submit' className='search-button' value="Search" />
    </form>
  )
}