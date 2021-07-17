import image from'./imdb.png';

function IMDBbutton(props) {
    
    const link = "https://www.imdb.com/title/"+props.title;

    return (
     <a href={link} target="_blank" rel="noreferrer" ><img src={image} alt="imdbLogo" height="70px" width="auto" /></a>
    )
}

export default IMDBbutton;