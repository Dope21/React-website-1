import { Link } from "react-router-dom"

function CardItem({
    src,
    text,
    label,
    path
}) {
  return (
    <>
        <li className="cards-item">
            <Link to={path} className="cards-link">
                <figure className="cards-img-wrapper" data-category={label}>
                    <img src={src} alt="Blog" 
                    className="cards-img"/>
                </figure>
                <div className="cards-info">
                    <h5 className="cards-text">{text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem