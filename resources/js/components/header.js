import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

import logo from "./image/logo.png"

const app = {
    height: 100,
    margin: 0
}

const label = {
    color: 'black',
    textDecoration:'none'
}

const logoStyle = {
    width: "120px",
    marginRight: "60px",
    marginBottom:" 8px",
}

const header=({ setPage })=>{
    function pageChange() {
        setPage("login");
    }

    return(
        <Container className="border" fluid style={app}>
            <Row className="justify-content-center" style={app}>
                <Col style={logoStyle} className="align-items-center d-flex" xs={6}>
                    <Link to="/">
                        <img
                            className="w-100 center"
                            src={logo}
                            alt="First slide"
                        />      
                    </Link>
                </Col>
                <Col className="align-items-center d-flex" xs={2}>
                    <Link to="/About" style={label}>About</Link>
                </Col>
                <Col className="align-items-center d-flex" xs={3}>
                    <Link onClick={pageChange} to="/Login" style={label}>Log-in</Link>
                </Col>
                
                {/* <Col className="align-items-center d-flex" xs={2}>
                    <Link to="/" style={label}>Username</Link>
                </Col> */}
            </Row>
        </Container>
    ); 
}
export default header;