const Galadriel = ({characters}) => {

    return(
        <div>
            <h2>{characters[5].name}</h2>
            <h5>{characters[5].aliases}</h5>
            <p>{characters[5].description}</p>
        </div>
    )
}

export default Galadriel