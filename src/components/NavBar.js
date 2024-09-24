import { Link } from "react-router-dom";
const NavBar=()=>{
    return (
        <div className="NavBar">
            <h4><img className="imgLogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG"></img></h4>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;