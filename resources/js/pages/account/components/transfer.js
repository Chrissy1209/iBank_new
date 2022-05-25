import { Col,Card } from 'react-bootstrap';

const Transfer = () => {
    return (
        <Col xs={12} style={{marginTop:'-150px'}}>
            <Card className="text-end">
                <Card.Header className="text-center">9次</Card.Header>
                <Card.Body>
                    <Card.Text className="text-start" style={{borderBottom: "1px solid darkgray"}}>
                        轉帳紀錄
                    </Card.Text>
                </Card.Body>
            </Card>        
        </Col>               
    );
}

export default Transfer