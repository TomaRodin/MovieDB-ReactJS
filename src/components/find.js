import { useRef, useState } from "react";
import Movie from './Movie'
import './Find.css'

function Find() {
    const [data,setData] = useState();
    const text = useRef()


    function api() {
        if ( text.current.value === "") {
            return false
        }
        else {
            setData(<Movie name={text.current.value} ></Movie>)
        }
        
    }

    function InputHandler(event) {
        if (event.currentTarget.value !== data) {
            setData("")
        }
    }

    const handleKeypress = e => {
        if (e.key === 'Enter' && text.current.value !== '' ) {
            api();
        }
    };


    return (
        <div className="form" >
            <div className="demo">
                <input ref={text} onChange={InputHandler} onKeyPress={handleKeypress} className="searchTerm" placeholder="Search:" />
                <div onClick={api} className="searchButton" >Search</div>
            </div>
            

            <div>{data}</div>

        </div>
        
    )
}

export default Find;