import React, { Component } from 'react'
import { FlexibleXYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Highlight, Hint } from 'react-vis'
import { connect } from 'react-redux'
import { getDataSocket, setFilterArea, setFilterObject, setHintPoint } from '../store/actions/chartActions'
import io from 'socket.io-client'
import * as netConfig from '../config.json'


const mapStateToProps = (state) => ({
  data: state.chart.data,
  filter: state.chart.filter,
  point: state.chart.point
})

let socket

let {SERVER_IP_ADDRESS, SERVER_LISTENING_PORT} = netConfig

export class Chart extends Component {
  componentDidMount() {
    socket = io.connect(`http://${SERVER_IP_ADDRESS}:${SERVER_LISTENING_PORT}`)
    this.props.getDataSocket(socket)
  }
  componentWillUnmount() {
    socket.disconnect()
  }
  render() {
    return (
      <div style={{ width: '100%', height: '80vh' }}>
        <FlexibleXYPlot
          dontCheckIfEmpty
          xDomain={
            this.props.filter && [
              this.props.filter.left,
              this.props.filter.right
            ]
          }
          yDomain={
            this.props.filter && [
              this.props.filter.bottom,
              this.props.filter.top
            ]
          }>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {
            this.props.data.length > 0 ?
              <LineSeries color={"#179bdc"} data={this.props.data} onNearestX={(datapoint, event) => this.props.setHintPoint(datapoint)} />
              :
              <LineSeries color={"#179bdc"} data={[{ x: 0, y: 0 }]} />
          }

          { this.props.point != null ? <Hint value={this.props.point} /> : null }

          <Highlight


            onBrushEnd={area => this.props.setFilterArea(area)}
            onDrag={area => this.props.setFilterObject(area)} />
        </FlexibleXYPlot>
      </div >

    )
  }
}



export default connect(mapStateToProps, { getDataSocket, setFilterArea, setFilterObject, setHintPoint })(Chart)