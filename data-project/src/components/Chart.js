import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], layout: { autosize: true}, frames: [], config: {responsive: true, useResizeHandler: true} }
  }


  render() {
    return (
      <div style={{ width: '100%', height: '80vh'}}>
        <Plot style={{width: '100%', height: '100%'}} data={this.state.data} layout={this.state.layout} frames={this.state.frames} config={this.state.config} onInitialized={figure => this.setState(figure)} onUpdate={figure => this.setState(figure)} />
      </div>

    )
  }
}




export default Chart
