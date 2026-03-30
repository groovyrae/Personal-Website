import { NavLink, Link } from 'react-router-dom'

function Header() {
    const name = ({isActive}) => (isActive ? "active" : "link")

    return (
        <header>
            <Link to="/" className="header-name">
                <h1>Dinner For One.</h1>
            </Link>
            <nav>
                <NavLink to="/" className={name}>Home</NavLink>
                <NavLink to="/how-to" className={name}>How To</NavLink>
                <NavLink to="/past-recipes" className={name}>Past Recipes</NavLink>
            </nav>
        </header>
    )
}

export default Header