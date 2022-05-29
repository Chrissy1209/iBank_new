import { Col,Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
const History = () => {
    const [history, setHistory] = useState([])

    useEffect(()=>{
        axios({
            method: "GET",
            url: "/api/transaction",
        })
        .then((res) => {
            setHistory(res.data);
            console.log(res.data);
            // setHistory(res.data);
            // res.data.forEach((a) => {
            //     if(a.payee=='joyce890926@gmail.com' || a.payer=='joyce890926@gmail.com'){
            //         console.log(a);
            //         setHistory(a);
   
            //     }
            // });
        })
        .catch((err) => {
            console.log(err);

        })
    },[]);
    return (
        <Col xs={12} style={{margin:'-50px 0',height:'380px'}}>
            {/* <Card  className="text-end">
                <Card.Header className="text-center" >歷史轉帳記錄</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start" style={{borderBottom: "1px solid darkgray"}}>
                            dddddd
                        </Card.Text>
                    </Card.Body>
            </Card> */}
            <Table striped  hover>{/** bordered */}
                <thead>
                    <tr>
                        <th></th>
                        <th>收款帳號</th>
                        <th>轉帳金額</th>
                        <th>轉帳日期</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td></td>
                        <td>{history.payee}</td>
                        <td>{history.transaction_amount}</td>
                        <td></td>
                    </tr>
                </tbody> */}
                <tbody>
                    {history.map((history,index)=>(
                        <tr key={history.id}>
                            <td>{++index}</td>
                            <td>{history.payee}</td>{/* */}
                            <td> {history.transaction_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>                       
        </Col>
    );
}

export default History