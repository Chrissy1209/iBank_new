import 'bootstrap/dist/css/bootstrap.min.css';

import { Form,Col,Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Member = () => {
    const [member, setMember] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: "/api/myuser",
        })
        .then((res) => {
            console.log(res);
            setMember(res.data[0]);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return(
        <Col style={{marginTop: '-50px', padding:'15px'}} xs={12}>
            <Form>
                <p>{member.name}</p>
                <Form.Group  controlId="formBasicEmail">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={member.email}/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={member.password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                    <Form.Label>電話號碼</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" value={member.phone} />
                </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                <Button variant="outline-secondary" type="submit">
                    更新
                </Button>
            </Form>
        </Col>
    ); 
}

export default Member;