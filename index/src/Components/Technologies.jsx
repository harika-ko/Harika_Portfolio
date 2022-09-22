import { Container, Row, Col, Image } from "react-bootstrap";
import "../Css/Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact, faBootstrap, faJs } from '@fortawesome/free-brands-svg-icons';

const Technologies = () => {

    return (
        <div className="tech-div">
            <Container fluid id="skills">
                <Row>
                    <Col>
                        <h2 className="technologies">Technologies</h2>
                        <div className="disflex content-div">
                            <div className="html-div disflex">
                                <FontAwesomeIcon icon={faHtml5} className="icon" />
                                <h4 className="tech">HTML5</h4>
                            </div>
                            <div className="html-div disflex">
                                <FontAwesomeIcon icon={faCss3} className="icon" />
                                <h4 className="tech">CSS3</h4>
                            </div>
                            <div className="html-div disflex">
                                <FontAwesomeIcon icon={faJs} className="icon" />
                                <h4 className="tech">JavaScript</h4>
                            </div>
                            <div className="html-div disflex">
                                <FontAwesomeIcon icon={faReact} className="icon" />
                                <h4 className="tech">React</h4>
                            </div>
                            <div className="html-div disflex">
                                <FontAwesomeIcon icon={faBootstrap} className="icon" />
                                <h4 className="tech">Bootstrap</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Technologies