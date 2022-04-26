import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Happy Stay
                <span>
                        <lord-icon
                            src="https://cdn.lordicon.com/paspbkiv.json"
                            trigger="loop"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{width:'50px',height:'50px'}}/>
                </span>
                </span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar