import React, { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import Chart from './Chart'
import { deleteData } from '../store/actions/chartActions'
import { connect } from 'react-redux'




export class AppEsperimento extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Chart />
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup className="my-3">
              <Button variant="outline-danger" onClick={this.props.deleteData }>Cancella il grafico corrente</Button>
              {/* <Button variant="secondary">Right</Button> */}
            </ButtonGroup>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default connect(null, { deleteData })(AppEsperimento)
