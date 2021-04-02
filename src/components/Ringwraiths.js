const Ringwraiths = ({characters}) => {

    return(
        <div>
            <h2>{characters[1].name}</h2>
            <h5>{characters[1].aliases[0]}</h5>
            <h5>{characters[1].aliases[1]}</h5>
            <p>{characters[1].description}</p>
        </div>
    )
}

export default Ringwraiths