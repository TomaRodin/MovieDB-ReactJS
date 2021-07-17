import { useState, useEffect } from 'react';
import About from './About';
import './Movie.css'

function Movie(props) {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch('https://www.omdbapi.com/?t='+props.name+'&apikey=/').then(response => {
        console.log('Requested')
      return response.json();
    }).then(data => {
      setisLoading(false)
      setLoadedMeetups(data)

    })
  }, []); 


  if (isLoading) {
    return <section>
      <p className="loading">Loading...</p>
    </section>
  }

    if (loadedMeetups.Response === "False") {
        return (<p>Movie Not Found</p>)
    }

        return <section>
        
        <About data={loadedMeetups}/>
    </section>



}

export default Movie;