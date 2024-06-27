// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    console.log('accelerator pressed')
    this.setState(prevstate => {
      if (prevstate.speed < 200) {
        return {speed: prevstate.speed + 10}
      }
      return {speed: prevstate.speed}
    })
  }

  ApplyBreak = () => {
    this.setState(prevstate => {
      if (prevstate.speed > 0) {
        return {speed: prevstate.speed - 10}
      }
      return {speed: prevstate.speed}
    })
  }

  render() {
    const {speed} = this.state
    console.log('main called')
    return (
      <div className="cont1">
        <h1>SPEEDOMETER</h1>
        <img
          className="imager"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="cont2">
          <button className="btn-pr" type="button" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button className="btn-tr" type="button" onClick={this.ApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
