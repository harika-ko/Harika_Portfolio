import { Container, Col, Row } from "react-bootstrap"
import "../Css/AboutMe.css";

const AboutMe = () => {
    return (
        <div className="disflex" id="about">
            <div className="aboutme-div">
                {/* Background Image is displayed here */}
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="aboutme-text">
                            <h1 className="about-me">About Me</h1>
                            <p className="about-para">I am a Computer Science Graduate with 3 years of experience in IT field. Currently, I am a certified Frontend
                                developer from Epicode. I like to craft solid and scalable frontend products with great user experience.
                                Interested in the entire frontend spectrum along with constantly updating myself with latest technologies.
                            </p>
                            <h6 className="suggestion">You are welcome to get in touch for any suggestions or collaborations.</h6>
                            <div className="hire-button-div">
                                <a href="https://www.linkedin.com/in/harika-ko/" className="hire-button">Hire Me</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutMe;