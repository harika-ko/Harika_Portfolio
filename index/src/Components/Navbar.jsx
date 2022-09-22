import "../Css/Navbar.css"
import mypic from "../Assets/photo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <img src={mypic} alt="my pic" className="my_pic" />
                <a class="navbar-brand" href="#">hk</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="about" smooth={true}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="skills" smooth={true}
                                >Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="projects" smooth={true}>Projects</Link>
                            </li>
                            <li class="nav-item last-nav-item">
                                <Link class="nav-link" to="contact" smooth={true}>Contact</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar