import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    
    const className = (path) => {
        if (window.location.pathname === path) return "active nav-link"
        return "nav-link"
    }
    return (
        <Navbar bg="dark" variant="dark" className="px-3">
            <Navbar.Brand>Kuntul</Navbar.Brand>
            <Nav className="me-auto">
                <Link to={'/'} className={className('/')}>Home</Link>
                <Link to={'/login'} className={className('/login')}>Login</Link>
                <Link to={'/register'} className={className('/register')}>Register</Link>
            </Nav>
        </Navbar>
    )
}

export default Header