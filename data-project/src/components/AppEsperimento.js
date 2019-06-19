import React, { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import Chart from './Chart'

export class AppEsperimento extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <ButtonGroup className="mr-2">
              <Button variant="outline-success">Connettiti al server</Button>
              <Button variant="outline-danger">Disconnettiti dal server</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart/>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default AppEsperimento
