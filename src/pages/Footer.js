import React,{useState} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

// import module css
import moduleCss from '../assets/css/Footer.module.css'

// import icons
import { FaMusic } from "react-icons/fa"

// import image
import Logo from '../assets/img/banner.svg'

// import modal
import Modals from '../components/Modals/Modals';

export default function Footer() {

    const [modalRegister, setModalRegister] = useState(0);

    // modal show
    const showModalRegister = () => {
        setModalRegister(modalRegister + 1)
    }

    return (
        <>
        <Container fluid className={`p-5 ${moduleCss.container}`}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} sm={12}>
                        <img src={Logo} alt="logo" className={`${moduleCss.imageBanner}`}/>
                    </Col>
                    <Col className="text-center" md={6} sm={12}>
                        <h1 className="text-white"> <strong>Daftar Sekarang </strong> Juga Di <FaMusic className={`${moduleCss.icon}`}/> MusikKu</h1>
                        <Button className={`mt-4 ${moduleCss.btnRegister}`} onClick={showModalRegister}>Daftar Sekarang</Button>
                    </Col>
                </Row>
            </Container>
        </Container>

        <Container fluid className={` p-2 ${moduleCss.container1}`}>
            <h6 className="text-center text-white">Copyright &copy; <span className={` p-2 ${moduleCss.icon}`}>Aris Munandar 2021</span></h6>
        </Container>

        {/* Modal */}
        <Modals register={modalRegister} />

        </>
    )
}
