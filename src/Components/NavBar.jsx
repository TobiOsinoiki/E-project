import { Link } from "react-router-dom"


const navStyle ={
padding: '1rem',
backgroundColor: "cadetblue",
display: "flex",
gap:  '1.5rem',
alignItems: 'center'
}

const linkStyles ={
    color: 'white',
    textDecoration: "none",
    fontSize: '1.1rem',
    fontWeight: 'bold'
}

const NavBar = () =>{
    return (
    <nav style={navStyle}> 
    <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/register" style={linkStyles}>Register</Link>
    </nav>
    )
}

export default NavBar;