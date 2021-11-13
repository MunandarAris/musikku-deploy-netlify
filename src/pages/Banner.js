import React from 'react'
import { Container } from 'react-bootstrap'

// import module css
import moduleCss from '../assets/css/Banner.module.css'

// import component
import Navigation from '../components/Banner/Navigation'
import Content from '../components/Banner/Content'

export default function Banner() {
    return (
        <Container fluid className={`${moduleCss.container}`}>
            
            <Navigation />
            <Content />

        </Container>
    )
}
