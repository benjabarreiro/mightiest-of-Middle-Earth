const Elrond = ({characters}) => {

    return(
        <div>
            <h2>{characters[4].name}</h2>
            <h5>{characters[4].aliases}</h5>
            <p>{characters[4].description}</p>
        </div>
    )
}

export default Elrond