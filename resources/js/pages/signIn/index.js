import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import Background from "./image/bg.png"
import Login from './components/login';
import Signup from './components/signup';

const app = {
    height:590,
    backgroundImage: `url(${Background})`,
    backgroundSize:'100%',
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
}

const SignIn = ({ page, setPage }) => {
    return(
        <Container style={app} id="container" className="d-flex justify-content-center align-items-top">
            {page == "login" && <Login setPage={setPage}/>}
            {page == "signup" && <Signup setPage={setPage}/>}
        </Container>
    ); 
}

export default SignIn;