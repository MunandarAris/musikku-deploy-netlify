import React from 'react'
import { Container, Row } from 'react-bootstrap'

// import component
import Search from '../components/MusicLists/Search'
import ListMusic from '../components/MusicLists/ListMusic'

// import icons
import { FaMusic } from "react-icons/fa"

// import module css
import moduleCss from '../assets/css/MusicLists.module.css'

// import assets
import Cover1 from '../assets/img/coverMusik/cover_lathi.png'

export default function MusicLists() {
    return (
        <Container>
            
            <Search />

            <h2 className="text-center">
                Daftar Lagu Di <FaMusic className={`${moduleCss.logo}`} /> MusikKu
            </h2>

            <Row className="justify-content-center py-5">
                <ListMusic cover={Cover1} genre="pop" title="Putus Atau Terus" imageArtis={Cover1} artisName="Lathi"/>
            </Row>

        </Container>
    )
}
