import 'bootstrap/dist/css/bootstrap.min.css';

import { Form,Row,Col,Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import logo from "../image/logoRound.png"
import logoName from "../image/logoName.png"

const margin = {
    margin: "10px 0",
}

const btn = {
    margin: "15px 15px 10px 0",
    color: "white",
    borderColor: "white",
}

const Login = ({ setPage }) => {

    const [account, setAccount] = useState("")
    function accountChange(e) {
        setAccount(e.target.value)
    }

    const [password, setPassword] = useState("")
    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function logIn() {
        axios.get("/api/myuser/logIn", {account,password})
        .then(res => {
            console.log(res);
            // localStorage.setItem("users",response.data);
            // history.push("/Home");
         });
    }

    function pageChange() {
        setPage("signup");
    }
  
    return(
        <Row className='justify-content-center'>
            <Col style={{ marginTop: "10px", marginBottom: "-25px" }} xs={8}>
                <img
                    className="w-100"
                    src={logo}
                    style={{
                        marginBottom: "-110px",
                    }}
                    alt="Logo"
                />
                <img
                    className="w-100"
                    src={logoName}
                    style={{
                        padding: "36px 43px 36px 36px",//30px 37px 30px 30px
                        marginBottom: "-170px",
                    }}
                    alt="Logo"
                />
            </Col>
            <Col xs={8}>
                <Form style={{color: "white"}} className="w-90">
                    <Form.Group onChange={accountChange} style={margin} controlId="loginAccountName">
                        <Form.Label>帳號</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Account Name" />
                    </Form.Group>
                    <Form.Group onChange={passwordChange} style={margin} controlId="loginPassword">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control name="email" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group style={margin} className="justify-content-center" controlId="loginAccount">
                        {/* <Link style={label} to="/Account"> */}
                            <Button onClick={logIn} style={btn} variant="outline-secondary" type="submit">
                                登入
                            </Button>
                        {/* </Link> */}
                        <Button onClick={pageChange} style={btn} variant="outline-secondary">
                            註冊
                        </Button>                    
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    ); 
}

export default Login;