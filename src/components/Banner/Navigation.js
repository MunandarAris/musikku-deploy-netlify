import React,{useState} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

// import icons
import { FaMusic } from "react-icons/fa";

// import module css
import moduleCss from './Banner.module.css'

// import modal
import Modals from '../Modals/Modals';

export default function Navigation() {

    const [modalRegister, setModalRegister] = useState(0);
    const [modalLogin, setModalLogin] = useState(0);

    // modal show
    const showModalRegister = () => {
        setModalRegister(modalRegister + 1)
    }

    const showModalLogin = () => {
        setModalLogin(modalLogin + 1)
    }

    return (
        <>
        <Navbar className="py-3" bg="transparant" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <h4 className="text-white mb-0"><FaMusic className={`${moduleCss.logo}`}/> MusikKu</h4>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button className={`px-4 mx-4 ${moduleCss.btnRegister}`} onClick={showModalRegister}>Register</Button>
                        <Button className={`px-4 ${moduleCss.btnLogin}`} onClick={showModalLogin}>Login</Button>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

        {/* modal */}
        <Modals register={modalRegister} login={modalLogin}/>
        </>
    )
}
