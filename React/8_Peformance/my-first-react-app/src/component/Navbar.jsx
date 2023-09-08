import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/about">About</Link>
        </div>
    )
}