function When(props) {
    var runtime = parseInt(props.runtime)
    var dt = new Date();
    dt.setMinutes(dt.getMinutes() + runtime);

    return (
        <p>{dt.getHours()}:{dt.getMinutes()}</p>
    )
}

export default When;