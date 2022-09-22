import { Container, Row, Col, Image } from "react-bootstrap";
import "../Css/Projects.css";
import foodmood from "../Assets/FoodMood_pic.JPG";
import Linkedin from "../Assets/Linkedin_pic.JPG";
import Spotify from "../Assets/Spotify_pic.png";

const Projects = () => {
    return (
        <>
            <div id="projects">
                <Container fluid>
                    <h2 className="latest-projects">Latest Projects</h2>
                    <Row>
                        <Col className="projects-div">
                            <div className="pro">
                                <div className="disflex project-info">
                                    <div className="project_name">
                                        <h4 className="pro-data">FoodMood</h4>
                                    </div>
                                    <div className="project_time">
                                        <h4 className="pro-data">September, 2022</h4>
                                    </div>
                                </div>
                                <div className="img-wrapper">
                                    <a href="https://github.com/harika-ko/Capstone_Project" target="_blank">
                                        <Image src={foodmood} alt="FoodMood Image" className="foodmood" />
                                    </a>
                                </div>
                            </div>

                            <div className="pro">
                                <div className="disflex project-info ">
                                    <div className="project_name">
                                        <h4 className="pro-data">LinkedIn Clone</h4>
                                    </div>
                                    <div className="project_time">
                                        <h4 className="pro-data">July, 2022</h4>
                                    </div>
                                </div>
                                <div className="img-wrapper">
                                    <a href="https://github.com/harika-ko/LinkedIn" target="_blank">
                                        <Image src={Linkedin} alt="Linkedin Image" className="foodmood" />
                                    </a>
                                </div>
                            </div>

                            <div className="disflex project-info">
                                <div className="project_name">
                                    <h4 className="pro-data">Spotify Clone</h4>
                                </div>
                                <div className="project_time">
                                    <h4 className="pro-data">June, 2022</h4>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <a href="https://github.com/harika-ko/Redux_Spotify" target="_blank">
                                    <Image src={Spotify} alt="Spotify Image" className="foodmood" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default Projects;