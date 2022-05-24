import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import { useState } from 'react';


const Message = ({ setPage }) => {
    function pageChange() {
        setPage("Password");
    }

    return(
        <Container>
            <Form.Group className="mb-3" controlId="transactionPassword">
                <Form.Label>簡訊</Form.Label>
                <Form.Control type="text" placeholder="text" />
            </Form.Group>
            <br></br>
            {/* <Form.Group className="mb-3" controlId="transactionCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>  */}
            <Button onClick={pageChange} style={{margin: "10px 10px 10px 0"}} variant="outline-secondary" type="submit">
                簡訊驗證
            </Button>
        </Container>
    ); 
}
export default Message;