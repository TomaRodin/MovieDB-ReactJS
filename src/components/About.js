import { useState } from 'react';
import './About.css';
import Runtime from './Runtime';
import Metascore from './Metascore';
import ImdbButton from './ImdbButton';

function About(props) {
    const [more, setMore] = useState("");
    const data = props.data
     
    function More() {
        if (more === "") {
            setMore(
            <div>
                <h3>Production:</h3>
                <p>{data.Production}</p>
                <Runtime runtime={data.Runtime} />
                <h3>Metascore:</h3>
                <Metascore score={data.Metascore} />
                <ImdbButton title={data.imdbID} />
            </div>
            )
        }
        else {
            setMore("")
        
        }

    }

    return (
        <div className="container">
            <h1>{data.Title}</h1>
            <p>{data.Year}</p>
            <img src={data.Poster} alt="poster" ></img>
            <h3>Rating: {data.imdbRating}</h3>
            <h3>Genres:</h3>
            <p>{data.Genre}</p>
            <h3>Plot:</h3>
            <p>{data.Plot}</p>

            <div onClick={More} className="button">More</div>

            <div>{more}</div>

        </div>
    )
}

export default About;