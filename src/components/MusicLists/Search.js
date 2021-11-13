import React from 'react'
import { Form } from 'react-bootstrap'

// import module css
import moduleCss from './MusicLists.module.css'

// import icons
import { FaMusic } from "react-icons/fa";

export default function Search() {
    return (
        <Form className="py-4">
            <Form.Group className="mb-3 d-flex justify-content-center" controlId="search">
                
                <Form.Control className={`px-4 ${moduleCss.inputSearch}`} type="text" placeholder="Cari musik disini" />

                <h3><FaMusic className={`mx-4 ${moduleCss.logo}`} /></h3>
                <h3><FaMusic className={` ${moduleCss.logo1}`} /></h3>
                <h3><FaMusic className={`${moduleCss.logo}`} /></h3>
            </Form.Group>
        </Form>
    )
}
