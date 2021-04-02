import { Link } from 'react-router-dom'

const Header = ({ title }) => {
    return (
        <header className="App-header">
          <h1>{title}</h1>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/Sauron">Sauron</Link>
          <Link className="link" to="/Ringwraiths">Ringwraiths</Link>
          <Link className="link" to="/Saruman">Saruman</Link>
          <Link className="link" to="/Gandalf">Gandalf</Link>
          <Link className="link" to="/Elrond">Elrond</Link>
          <Link className="link" to="/Galadriel">Galadriel</Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'Mightiest of Middle Earth'
}

export default Header