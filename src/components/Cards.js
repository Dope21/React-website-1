import CardItem from "./CardItem"
import './Cards.css'

import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img8 from "../images/img-8.jpg"
import img9 from "../images/img-9.jpg"
import img2 from "../images/img-2.jpg"

function Cards() {
  return (
    <div className="cards">
        <h2>Explore Our Beautiful Hotel!</h2>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className='cards-items'>
                  <CardItem
                    src={img3}
                    text='This room has a king-size bed and includes all kinds of basic facilities with the cheapest price'
                    label='Standard'
                    path='/rooms'
                  />
                  <CardItem
                    src={img4}
                    text='This room is designed to stay the extra number of people such as business or sightseeing travelers.'
                    label='Moderate'
                    path='/rooms'
                  />
                  <CardItem
                    src={img8}
                    text='This room view, location, advanced furnishings, decorations and shapes are deluxe in every way.'
                    label='Deluxe'
                    path='/rooms'
                  />
                </ul>
                <ul className="cards-items">
                    <CardItem 
                      src={img9}
                      text="Explore the attractions around the island."
                      label="Travel"
                      path="/services"
                    />
                    <CardItem
                      src={img2}
                      text='Scuba diving, Boating service and more'
                      label='Services'
                      path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards