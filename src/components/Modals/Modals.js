import React,{useState, useEffect} from 'react'
import { Modal,Button,Form } from 'react-bootstrap'

// import module css
import moduleCss from './Modal.module.css'

// import icons
import { FaMusic } from "react-icons/fa";

export default function Modals(props) {

    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {


        return () => {
            setShowRegister(true)
        }

    },[props.register]);

    useEffect(() => {

        return () => {
            setShowLogin(true)
        }

    },[props.login]);

    // hide modal
    const hideRegister = () => {
        setShowRegister(false)
    }

    const hideLogin = () => {
        setShowLogin(false)
    }

    return (
        <>

        {/* Modal Register */}
        <Modal show={showRegister} onHide={() => {setShowRegister(false)}}>
            <Modal.Header>
                <Modal.Title>
                    <FaMusic className={moduleCss.icon}/> Register
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" className={moduleCss.inputForm}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="fullname">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control type="text" placeholder="Enter your fullname" className={moduleCss.inputForm}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" className={moduleCss.inputForm}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={hideRegister}>
                    Close
                </Button>

                <Button className={`${moduleCss.btnRegister}`}>
                    Register
                </Button>
            </Modal.Footer>

            <h6 className="text-center py-4">Sudah Punya Akun ? <span className="text-muted" onClick={() => {setShowLogin(true);hideRegister()}} style={{cursor : 'pointer'}}>Login</span></h6>
        </Modal>

        {/* Modal Login */}
        <Modal show={showLogin} onHide={() => {setShowLogin(false)}}>
            <Modal.Header>
                <Modal.Title>
                    <FaMusic className={moduleCss.icon}/> Login
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" className={moduleCss.inputForm}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" className={moduleCss.inputForm}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={hideLogin}>
                    Close
                </Button>

                <Button className={`${moduleCss.btnRegister}`}>
                    Login
                </Button>
            </Modal.Footer>

            <h6 className="text-center py-4">Belum Punya Akun ? <span className="text-muted" onClick={() => {setShowRegister(true);hideLogin()}} style={{cursor : 'pointer'}}>Register</span></h6>
        </Modal>

        </>
    )
}
