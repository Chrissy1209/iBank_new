import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from "./image/bg.png"
import axios from 'axios';
import { useState, useEffect } from 'react';

const app = {
    height:590,
    backgroundImage: `url(${Background})`,
    backgroundSize:'100%',
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
}

const margin = {
    margin: "10px 0",
}

const label = {
    textDecoration:'none',
    color: "#6c757d",
}

const title = {
    color: "white",
    textAlign: "center",
    margin: "40px 0 20px 0",
    fontSize: "42px",
}

const btn = {
    margin: "15px 15px 10px 0",
    color: "white",
    borderColor: "white"
}

const Login = () => {
    const [test, setTest] = useState("");

    useEffect(() => {
        axios({
            method: "GET",
            url: [
            "/api/myuser",
        ]})
            .then((res) => {
                console.log(res.data);
                // setTest(res.data[0].name);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
  
    return(
        <Container style={app} className="d-flex justify-content-center align-items-top">
            <Row>
                <Col xs={12}>
                    <h1 style={title}>Login</h1>
                    <Form className="w-90">
                        <Form.Group style={margin} controlId="loginAccountName">
                            <Form.Label>帳號</Form.Label>
                            <Form.Control type="text" placeholder="Account Name" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="loginPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="loginAccount">
                            <Link style={label} to="/Account">
                                <Button style={btn} variant="outline-secondary" type="submit">
                                    登入
                                </Button>
                            </Link>
                            <Link style={label} to="/Register">
                                <Button style={btn} variant="outline-secondary">
                                    註冊
                                </Button>                    
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}

export default Login;