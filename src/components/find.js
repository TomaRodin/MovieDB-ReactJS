import { useRef, useState } from "react";
import Movie from './Movie'

function Find() {
    const [data,setData] = useState();
    const text = useRef()


    function api() {
        setData(<Movie name={text.current.value} ></Movie>)
    }

    function InputHandler(event) {
        if (event.currentTarget.value !== data) {
            setData("")
        }
    }


    return (
        <div>
            <input ref={text} onChange={InputHandler} />
            <button onClick={api} >Search</button>

            <div>{data}</div>

        </div>
        
    )
}

export default Find;