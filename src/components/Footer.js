import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p className="created">Created by Benjamín Barreiro</p>
            <Link className="link" to="/about-this-page">About this page</Link>
        </footer>
    )
}

export default Footer