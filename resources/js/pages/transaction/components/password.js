import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import { useState } from 'react';


const Password = ({ setPage }) => {
    function pageChange() {
        setPage("MyTransaction");
    }

    return(
        <Container>
            <Form.Group className="mb-3" controlId="transactionPassword">
                <Form.Label>帳戶密碼</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br></br>
            {/* <Form.Group className="mb-3" controlId="transactionCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>  */}
            <Button onClick={pageChange} style={{margin: "10px 10px 10px 0"}} variant="outline-secondary" type="submit">
                密碼驗證
            </Button>
        </Container>
    ); 
}
export default Password;