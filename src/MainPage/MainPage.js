import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./MainPage.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class MainPage extends React.Component {
    render() {
        return (
            <>
                <Container className='main-container'>
                    <Row>
                        <Navbar></Navbar>
                    </Row>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'></Col>
                        <Col lg={12} xl className='main-col main-hero'>
                            <div className='main-box'>
                                <h1>Housing for refugees</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada id
                                    nibh vel placerat. Pellentesque pulvinar
                                    tempus lorem eu fringilla.{" "}
                                </p>
                                <Link to='/signup'>
                                    <Button>Get Started</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainPage;
