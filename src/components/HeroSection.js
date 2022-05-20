import '../App.css'
import './HeroSection.css'
import { Button } from "./Button"

function HeroSection() {
  return (
    <div className="hero-container">
        <h1>SANDBOX</h1>
        <p>Book Your Stay</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle='btn--primary'
            buttonSize='btn--large'>
                PERVIEW <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection