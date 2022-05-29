import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Container,Row,Col } from 'react-bootstrap';
import { useState } from "react";

import Member from './components/member';
import Balance from './components/balance';
import Transfer from './components/transfer';
import History from './components/history';
import Background from "./image/Background.png";

const app = {
    backgroundImage: `url(${Background})`,
    backgroundSize:'100%',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'590px',
}

const btn = {
    border:" 1px solid rgb(69, 92, 153)",
    borderRadius: "20px",
    textAlign: "center",
    margin: "10px 0",
    padding: "0.375rem 0.75rem",
}

const Account = () => {
    const [page, setPage] = useState("AccountDetail");

    function ToAccountDetail() {
        setPage("AccountDetail");
        changeColor('Account');
    }
    function ToMemberProfile() {
        setPage("MemberProfile");
        changeColor('Member');
    }
    function ToHistoryProfile() {
        setPage("HistoryProfile");
        changeColor('History');
    }

    function changeColor(page){
        var account = document.getElementById("Account");
        var member = document.getElementById("Member");
        var history = document.getElementById("History");

        account.classList.remove("click");
        member.classList.remove("click");
        history.classList.remove("click");

        if(page == 'Account'){
            account.classList.add("click");
        }
        else if(page == 'Member'){
            member.classList.add("click");
        }
        else if(page == 'History'){
            history.classList.add("click");
        }
    }

    return(
        <Container style={app} className="d-flex justify-content-center align-item-top">
            <Row >
                <Col style={{marginTop: "60px",}} xs={4}>
                    <p style={btn} onClick={ToAccountDetail} className='click' id="Account">我的帳戶</p>
                </Col>
                <Col style={{marginTop: "60px",}} xs={4}>
                    <p style={btn} onClick={ToMemberProfile} id="Member">會員資料</p>
                </Col >
                <Col style={{marginTop: "60px",}} xs={4}>
                    <p style={btn} onClick={ToHistoryProfile} id="History">歷史紀錄</p>
                </Col >
                {page === "AccountDetail" && <Balance />}
                {page === "AccountDetail" && <Transfer />}
                {page === "MemberProfile" && <Member />}
                {page === "HistoryProfile" && <History />}                            
            </Row>  
        </Container>
    ); 
}
export default Account;