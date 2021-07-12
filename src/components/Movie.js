import { useState, useEffect } from 'react';
import About from './About';

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
      <p>Loading...</p>
    </section>
  }


  return <section>
    <About name={loadedMeetups.Title} rating={loadedMeetups.imdbRating} year={loadedMeetups.Year} poster={loadedMeetups.Poster} plot={loadedMeetups.Plot} />
  </section>
}

export default Movie;