const Saruman = ({characters}) => {

    return(
        <div>
            <h2>{characters[2].name}</h2>
            <h5>{characters[2].aliases[0]}</h5>
            <h5>{characters[2].aliases[1]}</h5>
            <p>{characters[2].description}</p>
        </div>
    )
}

export default Saruman