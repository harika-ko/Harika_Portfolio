import "../Css/Navbar.css"
import mypic from "../Assets/harika.png";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Experiences</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item last-nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar