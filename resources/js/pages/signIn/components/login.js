import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const margin = {
    margin: "10px 0",
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
        // axios({
        //     method: "GET",
        //     url: "/api/myuser/logIn",
        //     data: {
        //         name: account,
        //         email: password
        //     }
        // }).then((res) => {
        //         console.log(res);
        //         // console.log(res.data);
        //         // console.log(res.config.data);
        // }).catch((err) => {
        //         console.log(err);
        // })

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
        <Row>
            <Col xs={12}>
                <h1 style={title}>Login</h1>
                <Form className="w-90">
                    <Form.Group onChange={accountChange} style={margin} controlId="loginAccountName">
                        <Form.Label>帳號</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Account Name" />
                    </Form.Group>
                    <Form.Group onChange={passwordChange} style={margin} controlId="loginPassword">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control name="email" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group style={margin} controlId="loginAccount">
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