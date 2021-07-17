import Runtime from './Runtime';
import Metascore from './Metascore';
import ImdbButton from './ImdbButton';
import When from './When';
import { useState } from 'react';
import './MoreAbout.css'



function More(props) {
    const [when, setwhen] = useState()
    function MouseOver() {
        setwhen(
            <div className="when">
                <When runtime={data.Runtime} />
            </div>
        )
    }
    function MouseOut() {
        setwhen()
    }

    const data = props.data
    return (
        <div>
            <h3>Actors:</h3>
            <p>{data.Actors}</p>
            <h3>Production:</h3>
            <p>{data.Production}</p>
            <Runtime runtime={data.Runtime} />
            <p onClick={MouseOver} onMouseOut={MouseOut} >When will be finished?</p>
            <p>{when}</p>
            <h3>Metascore:</h3>
            <Metascore score={data.Metascore} />
            <ImdbButton title={data.imdbID} />
        </div>
    )
}

export default More;