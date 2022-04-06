import "./Navbar.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BootstrapNavbar(props) {
    const [error, setError] = useState("");
    let email = undefined;
    async function handleLogout() {
        setError("");
    }
    return (
        <Navbar
            id='navbar-container'
            bg='dark'
            variant='dark'
            sticky='top'
        >
            <Navbar.Brand href='/'>
                React-Bootstrap
            </Navbar.Brand>
            <Nav>
                {props.role === "host" ? (
                    <Nav.Item>
                        <Nav.Link href='/addlisting'>
                            <Button variant='outline-light'>
                                Add Listing
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                ) : (
                    <div></div>
                )}
                <Nav.Item>
                    <Nav.Link href=''>
                        <DropdownButton
                            id='dropdown-basic-button'
                            title='English'
                        >
                            <Dropdown.Item href='#/action-1'>
                                French
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                                German
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                                Italian
                            </Dropdown.Item>
                        </DropdownButton>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Button variant='outline-light'>
                            FAQ
                        </Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Button variant='outline-light'>
                            Support
                        </Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/login'>
                        <Button variant='primary'>
                            Log In
                        </Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}
