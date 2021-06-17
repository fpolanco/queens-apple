// import ButtonThumbs from "./ButtonThumbs"


const Movie = (props) => {
    const { title, image, director, year, description, genre, rating } = props
    return (
        <div className="card">
            <h1>{title}</h1>
          <div className="image" >
         <img src={image} alt={title} width={200} height={300} />
         <button className="rating">{rating ? "👍🏽" : "👎🏽"}</button>
         </div>
         <div className= "details">
         <h1>{title}</h1>
         <h2>{director}</h2>
         <h2>{year}</h2>
         <p>{description}</p>
         <h2>{genre}</h2>
         </div>
         {/* <ButtonThumbs /> */}
        </div>
    )
}

export default Movie