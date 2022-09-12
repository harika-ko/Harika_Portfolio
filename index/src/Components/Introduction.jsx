import "../Css/Introduction.css"
import mypic from "../Assets/harika.png";

const Intro = () => {
    return (
        <div className="intro-div">
            <div className=" disflex first-div">
                <div className="profile-pic">
                    <img className="profile-image" src={mypic} alt="profile picture" />
                </div>
                <div className="info-div">
                    <div className="hello-div">
                        <h6>Hello there!</h6>
                    </div>
                    <h1 className="name">I'm HARIKA KOMMURI</h1>

                    <h2>Frontend Developer</h2>

                    <h2 className="skill-head">Skillset</h2>
                    <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" className="logo" alt="html logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" className="logo" alt="css logo" />
                    <img src="https://www.duomimikry.de/wp-content/uploads/2016/03/bootstrap-logo.jpg" className="logo" alt="Bootstrap logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="logo" alt="Javascript logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" className="logo" alt="Typescript Logo" />
                    <img src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png" className="logo" alt="react logo" />
                    <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" className="logo" alt="redux logo" />


                    <div>

                        <h2 className="contact-head">Contact Me</h2>
                        <div className="disflex contact">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" className="contact-logo" alt="Linkedin logo" />
                            <p className="contact-text">www.linkedin.com/in/harika-ko</p>
                        </div>
                        <div className="disflex contact">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="contact-logo" alt="Github logo" />
                            <p className="contact-text">https://github.com/harika-ko</p>
                        </div>
                        <div className="disflex contact">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqO1WepknHrs7y5bmvoY1ID1xOQFcJ-Q2O7384qmbVGTGeLRMYgZ5uzLCgk1ECE4RdUM&usqp=CAU" className="contact-logo" alt="gmail logo" />
                            <p className="contact-text">harikakommuri35@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro