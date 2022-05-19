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
                    <img src={src} alt="Travel Imgae" 
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
// function CardItem(props) {
//   return (
//     <>
//         <li className="cards-item">
//             <Link to={props.path} className="cards-link">
//                 <figure className="cards-img-wrapper" data-category={props.label}>
//                     <img src={props.src} alt="Travel Imgae" 
//                     className="cards-img"/>
//                 </figure>
//                 <div className="cards-info">
//                     <h5 className="cards-text">{props.text}</h5>
//                 </div>
//             </Link>
//         </li>
//     </>
//   )
// }

export default CardItem