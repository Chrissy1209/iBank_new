import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "../css/app.css";
//-----
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/index';
import About from './pages/about/index';
import SignIn from './pages/signIn/index';
import Transaction from './pages/transaction/index';
import Account from './pages/account/index';

function App() {
    const [page, setPage] = useState('login');

    return (
        <HashRouter>
            <Header setPage={setPage}/>
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/Login" element={<SignIn page={page} setPage={setPage}/>} exact/>
                <Route path="/Transaction" element={<Transaction />} exact/>
                <Route path="/About" element={<About />} exact/>
                <Route path="/Account" element={<Account />} exact/>
            </Routes>
            <Footer/>
        </HashRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
