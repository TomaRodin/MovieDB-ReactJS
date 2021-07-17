import { useState } from 'react'
import './MovieInformations.css'

function Information(props) {
    const [isHover, setIsHover] = useState();
    const data = props.data

    const handleHover = () => {
        setIsHover(<div className="released">{data.Released}</div>)
    }

    const handleOut = () => {
        setIsHover()
    }

    return (
        <div>
            <br></br>
            <h1>{data.Title}</h1>
            <p onClick={handleHover} onMouseOut={handleOut} >{data.Year}</p>
            <p>{isHover}</p>
            <img src={data.Poster} alt="poster" ></img>
            <h3>Rating: {data.imdbRating}</h3>
            <h3>Genres:</h3>
            <p>{data.Genre}</p>
            <h3>Plot:</h3>
            <p className="plot">{data.Plot}</p>
        </div>
    )
}

export default Information;