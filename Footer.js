import { Container,Row, Col } from 'react-bootstrap'

import React from 'react'

function footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; AutoMart 2024</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default footer
