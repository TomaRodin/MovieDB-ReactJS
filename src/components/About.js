import './About.css';

function About(props) {
    return (
        <div className="container">
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <img src={props.poster} alt="poster" ></img>
            <h3>Rating: {props.rating}</h3>
            <h3>Genres:</h3>
            <p>{props.genres}</p>
            <h3>Plot:</h3>
            <p>{props.plot}</p>
        </div>
    )
}

export default About;