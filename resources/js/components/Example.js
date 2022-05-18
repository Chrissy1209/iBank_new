import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from '../pages/Home/index';
import About from '../pages/about/index';
import Login from '../pages/login/index';
import Transaction from '../pages/transaction/index';
import Register from '../pages/register/index';
import Account from '../pages/account/index';

function Example() {
    return (
        <div className="container">
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/Login" element={<Login />} exact/>
                <Route path="/Transaction" element={<Transaction />} exact/>
                <Route path="/About" element={<About />} exact/>
                <Route path="/Register" element={<Register />} exact/>
                <Route path="/Account" element={<Account />} exact/>
            </Routes>
            <Footer/>
        </HashRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
