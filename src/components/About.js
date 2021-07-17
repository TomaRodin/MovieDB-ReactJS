import { useState } from 'react';
import './About.css';
import MoreAbout from './MoreAbout';
import MovieInformations from './MovieInformations';

function About(props) {
    const [more, setMore] = useState("");
    const data = props.data
     
    function More() {
        if (more === "") {
            setMore(
                <MoreAbout data={data} />
            )
        }
        else {
            setMore("")
        
        }

    }

    return (
        <div className="container">
            <MovieInformations data={data} />

            <div onClick={More} className="button">More</div>
            <br></br>
            <div>{more}</div>

        </div>
    )
}

export default About;