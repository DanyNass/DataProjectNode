import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './AppLandingPage.css'

export class AppLandingPage extends Component {
  render() {
    return (
      <Container fluid className="landing-page functions-bg">
        <Row noGutters className="d-table opacity-filter" style={{ height: '100%', width: '100%' }}>
          <Col className="d-table-cell text-center align-middle">
            <h1 className="d-block display-3  text-white px-0 mx-auto">
              Osservare i dati non è mai stato così semplice
              </h1>
            <LinkContainer to="/esperimento">
              <Button id="home_button" size="lg" variant="primary" className="d-inline-block  my-5 mx-auto" role="button">
                Vai al tuo esperimento
              </Button>
            </LinkContainer>

          </Col>
        </Row>

      </Container>
    )
  }
}


export default AppLandingPage
