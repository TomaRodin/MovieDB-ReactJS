function Runtime(props) {
    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return  rhours + " hour and " + rminutes + " minute";
    }
        


    const time = parseInt(props.runtime)
    const Runtime = timeConvert(time)


    return (
        <div>
            <h3>Runtime:</h3>
            <p>{Runtime}</p>
        </div>
    )

}

export default Runtime;