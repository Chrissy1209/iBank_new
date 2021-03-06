import 'bootstrap/dist/css/bootstrap.min.css';

import { Form,Row,Col,Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const margin = {
    margin: "10px 0",
}

const errMesStyle = {
    color: "red",
    marginLeft: "43px",
    fontSize: "12px",
}

const btn = {
    margin: "15px 15px 10px 0",
    // color: "white",
    // borderColor: "white",
}
const form ={
    color: 'black',
    background: '#ffffff',
    padding: '10px 20px',
    borderRadius:' 10px',
    //border: '1px solid #ffffff',
    margin:'0 auto',
    width:'85%'
}
const text ={
    color:'white',
    fontSize:'xx-large',
    textAlign:'center'
}
const Register = ({ setPage }) => {
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
                // console.log(res.data);

                setPage("login");
                setReturnMes(res.data); //不能set
                // console.log(returnMes);

                // console.log(res.config.data);
        }).catch((err) => {
                console.log(err);
        })
    }

    return(
        <Row className='align-items-center'>
            <Col md={12}>
                <h5 style={text}>Singup</h5>
            </Col>
            <Col md={12}>
                <Form style={form}>
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
                    <Button onClick={signIn} style={btn} variant="outline-secondary" type="submit">
                        註冊
                    </Button>
                </Form>
            </Col>
        </Row>
    ); 
}

export default Register