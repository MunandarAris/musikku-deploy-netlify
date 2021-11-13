import React from 'react'
import { Col, Row } from 'react-bootstrap'

// import module css
import moduleCss from './MusicLists.module.css'

// import icons
import { MdPlaylistAdd } from "react-icons/md";

export default function ListMusic(props) {

    return (
        <Col md={3} className="m-4">
        
            <img src={props.cover} alt="cover" className={`${moduleCss.coverMusic}`}/>
            <p className="text-muted">#{props.genre}</p>
            <h5>
                {props.title}
            </h5>

            <Row className="pt-3 align-items-center justify-content-center">
                <Col md={3} xs={3}>
                    <img src={props.imageArtis} alt="artis" className={`rounded-circle ${moduleCss.imageArtis}`}/>
                </Col>

                <Col md={7} xs={7}>
                    <p className="text-muted">{props.artisName}</p>
                </Col>

                <Col md={2} xs={2}>
                    <h2>
                        <MdPlaylistAdd className={`${moduleCss.addPlaylist}`}/>
                    </h2>
                </Col>
            </Row>

        </Col>
    )
}
