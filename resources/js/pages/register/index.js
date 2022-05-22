import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Size = {
    height:'590px'
}

const margin = {
    margin: "10px 0",
}

const errMesStyle = {
    color: "red",
    marginLeft: "43px",
    fontSize: "12px",
}

const Register = () => {
    const [account, setAccount] = useState("")
    function accountChange(e) {
        setAccount(e.target.value)
    }

    const [check, setCheck] = useState(false);
    const [password, setPassword] = useState("")
    const [errMes, setErrMes] = useState("")
    function passwordChange(e) {
        setPassword(e.target.value);
        console.log("one = " + password);
        if (e.target.value.length <= 6) setErrMes("請設定長度大於6的密碼");
        else setErrMes("");
        if (check) {
            if (checkPassword != password) setErrMes2("請數入相同的密碼");
            else {
                setErrMes2("");
                setCheck(!check);
            }
        }
    }

    const [checkPassword, setCheckPassword] = useState("")
    const [errMes2, setErrMes2] = useState("")
    function checkPasswordChange(e) {
        setCheckPassword(e.target.value);
        console.log("two = " +checkPassword);
        console.log("one = " +password);
        if (checkPassword != password) setErrMes2("請數入相同的密碼");
        else {
            setErrMes2("");
            setCheck(true);
        }    
    }

    const [email, setEmail] = useState("")
    function emailChange(e) {
        setEmail(e.target.value)
    }

    const [phone, setPhone] = useState("")
    function phoneChange(e) {
        setPhone(e.target.value)
    }
    
    const [returnMes, setReturnMes] = useState(0);
    function signIn() {
        axios({
            method: "POST",
            url: "/api/myuser",
            data: {
                name: account,
                password: password,
                email: email,
                phone: phone
            }
        }).then((res) => {
                console.log(res);
                console.log(res.data);
                
                setReturnMes(res.data); //不能set
                console.log(returnMes);

                console.log(res.config.data);
        }).catch((err) => {
                console.log(err);
        })
    }

    return(
        <Container className="d-flex justify-content-center align-items-center" style={Size}>
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Form.Label md={2}>姓名</Form.Label>
                            <Form.Control value={account} onChange={accountChange} md={8} name="name" type="text" placeholder="請輸入全名" required />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Label style={errMesStyle} >{errMes}</Form.Label>
                            <Form.Control value={password} onChange={passwordChange} name="password" type="password" placeholder='請設定長度大於6的密碼' required/>
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerCheckPassword">
                            <Form.Label>確認密碼</Form.Label>
                            <Form.Label style={errMesStyle} >{errMes2}</Form.Label>
                            <Form.Control value={checkPassword} onChange={checkPasswordChange} type="password" placeholder="確認密碼" required/>
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerEmail">
                            <Form.Label>信箱</Form.Label>
                            <Form.Control value={email} onChange={emailChange} name="email" type="email" required pattern='^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$' />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerPhoneNumber">
                            <Form.Label>電話號碼</Form.Label>
                            <Form.Control value={phone} onChange={phoneChange} name="phone" type="text" required />
                        </Form.Group>
                        <Button onClick={signIn} style={margin} variant="outline-secondary" type="submit">
                            註冊
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Register