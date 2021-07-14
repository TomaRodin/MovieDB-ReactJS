import './Metascore.css'

function Metascore(props) {
    if (props.score === "N/A") {
        return <p>Unknown</p>
    }
    else {
        const score = parseInt(props.score)
        if (score >= 70) {
            return <p className="green">{props.score}</p>
        }
        else if (score < 60 && props.score >= 40) {
            return <p className="yellow">{props.score}</p>
        }
        else if (score < 40 ) {
            return <p className="red">{props.score}</p>
        }
    }

}

export default Metascore;