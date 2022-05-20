import CardItem from "./CardItem"
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h2>Explore Our Beautiful Hotel!</h2>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className='cards-items'>
                  <CardItem
                    src='images/img-3.jpg'
                    text='This room has a king-size bed and includes all kinds of basic facilities with the cheapest price'
                    label='Standard'
                    path='/rooms'
                  />
                  <CardItem
                    src='images/img-4.jpg'
                    text='This room is designed to stay the extra number of people such as business or sightseeing travelers.'
                    label='Moderate'
                    path='/rooms'
                  />
                  <CardItem
                    src='images/img-8.jpg'
                    text='This room view, location, advanced furnishings, decorations and shapes are deluxe in every way.'
                    label='Deluxe'
                    path='/rooms'
                  />
                </ul>
                <ul className="cards-items">
                    <CardItem 
                      src="images/img-9.jpg"
                      text="Explore the attractions around the island."
                      label="Travel"
                      path="/services"
                    />
                    <CardItem
                      src='images/img-2.jpg'
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