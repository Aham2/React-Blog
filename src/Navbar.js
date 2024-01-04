import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
                <h1>Blog</h1>

                <div className="links">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/create">
                        New Blog
                    </Link>
                    <Link to="/contact"
                    style={{
                        backgroundColor: "#9635f1",
                        borderRadius: "8px",
                        color: "white"
                    }}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;