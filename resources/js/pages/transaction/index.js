import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import MyTransaction from './components/transaction';
import Message from './components/message';
import Password from "./components/password"

const Transaction = () => {
    const [page, setPage] = useState('MyTransaction');

    return(
        <div>
            { page === "MyTransaction" && <MyTransaction setPage={setPage}/>}
            { page === "Message" && <Message setPage={setPage}/>}
            { page === "Password" && <Password setPage={setPage}/>}
        </div>
    ); 
}
export default Transaction;