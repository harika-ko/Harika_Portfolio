import { Container, Row, Col, Image } from "react-bootstrap";
import "../Css/Projects.css";
import foodmood from "../Assets/FoodMood_pic.JPG";
import Linkedin from "../Assets/Linkedin_pic.JPG";
import Spotify from "../Assets/Spotify_pic.png";

const Projects = () => {
    return (
        <>
            <div className="projects-div">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Latest Projects</h1>
                            <div className="disflex project-info">
                                <div className="project_name">
                                    <h4>FoodMood</h4>
                                </div>
                                <div className="project_time">
                                    <h4>September, 2022</h4>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <a href="https://github.com/harika-ko/Capstone_Project" target="_blank">
                                    <Image src={foodmood} alt="FoodMood Image" className="foodmood" />
                                </a>
                            </div>

                            <div className="disflex project-info">
                                <div className="project_name">
                                    <h4>LinkedIn Clone</h4>
                                </div>
                                <div className="project_time">
                                    <h4>July, 2022</h4>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <a href="https://github.com/harika-ko/LinkedIn" target="_blank">
                                    <Image src={Linkedin} alt="Linkedin Image" className="foodmood" />
                                </a>
                            </div>

                            <div className="disflex project-info">
                                <div className="project_name">
                                    <h4>Spotify Clone</h4>
                                </div>
                                <div className="project_time">
                                    <h4>June, 2022</h4>
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