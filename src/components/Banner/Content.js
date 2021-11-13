import React,{useState} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

// import module css
import moduleCss from './Banner.module.css'

// import assets image
import LogoBanner from '../../assets/img/banner.svg'

// import icons
import { FaMusic } from "react-icons/fa";

// import modal
import Modals from '../Modals/Modals';

export default function Content() {

    const [modalRegister, setModalRegister] = useState(0);

    // modal show
    const showModalRegister = () => {
        setModalRegister(modalRegister + 1)
    }

    return (
        <Container className="py-5">
            <Row className={` ${moduleCss.container} align-items-center py-4`}>

                <Col md={6} sm={12}>
                    <h1 className="text-white">Temukan <FaMusic className={`${moduleCss.logo}`}/> Musik Kesukaanmu</h1>
                    <p className="text-white my-4">
                        Dengarkan musik kesukaanmu dengan santai secara geratis tanpa iklan
                    </p>
                    <Button className={`px-4 mt-3 ${moduleCss.btnRegister}`} onClick={showModalRegister}>
                        Daftar Sekarang
                    </Button>
                </Col>

                <Col className="text-center" md={6} sm={12}>
                    <img src={LogoBanner} alt="banner" className={`${moduleCss.imgBanner}`}/>
                </Col>

            </Row>

            {/* Modal */}
            <Modals register={modalRegister} />
        </Container>
    )
}
