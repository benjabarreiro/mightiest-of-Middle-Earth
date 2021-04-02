const Sauron = ({characters}) => {

    let n=1;

    let sauron = characters.slice(0, n).map(i => {
        return <div>
            <h2>{i.name}</h2>
            <h5>{i.aliases}</h5>
            <p>{i.description}</p>
        </div>
    })

    return(
        <div>{sauron}</div>
    )
}

export default Sauron