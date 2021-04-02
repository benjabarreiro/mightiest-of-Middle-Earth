const Gandalf = ({characters}) => {

    return(
        <div>
            <h2>{characters[3].name}</h2>
            <h5>{characters[3].aliases[0]}</h5>
            <h5>{characters[3].aliases[1]}</h5>
            <p>{characters[3].description}</p>
        </div>
    )
}

export default Gandalf