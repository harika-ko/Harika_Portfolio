import "../Css/Introduction.css"
import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import { useState } from "react";

const Intro = () => {

    const form = useRef();

    const [email, SetEmail] = useState("")
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        SetEmail(e.target.value);
    }

    const isEmail = (email) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    if (!isEmail(email)) {
        errors.email = "Please enter correct email address";
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l92hvmk', 'template_q0vpnxx', form.current, 'fWl1hcngvKvcg4oxB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="intro-div">
            <Container>
                <Row>
                    <Col className="intro">
                        <div className="hello-div">
                            <h6>Hello there!</h6>
                        </div>
                        <h1 className="name">I'm HARIKA KOMMURI</h1>
                        <div className="frontdev">
                            <span>F</span>
                            <span>R</span>
                            <span>O</span>
                            <span>N</span>
                            <span>T</span>
                            <span>E</span>
                            <span>N</span>
                            <span>D</span>
                            &nbsp; &nbsp;&nbsp;&nbsp;
                            <span>D</span>
                            <span>E</span>
                            <span>V</span>
                            <span>E</span>
                            <span>L</span>
                            <span>O</span>
                            <span>P</span>
                            <span>E</span>
                            <span>R</span>
                        </div>
                        <p className="intro-text">based in <b>Germany</b> & Specialized in building Responsive Web designs</p>
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <input type="email" name="email" className="form-email" placeholder="Enter your email" value={email} onChange={handleChange} />
                            <input type="submit" value="Connect with me" className="submit-email" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro














