
import './Card.css'


const Card=({title,image})=>{
    return(
        <div className="card">
            <h2>{title}</h2>
            <div className="hovercard">
                <img src={image} alt="" />
            </div>

        </div>
    )
}

export default Card