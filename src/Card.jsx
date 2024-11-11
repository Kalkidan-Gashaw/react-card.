
function Card({image, title, description}){
    return(
       <>
           <div className="card">
           <img  className="images" src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            </div> 
       </>
    )
}
export default Card