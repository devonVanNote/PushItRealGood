import React, { Component } from 'react'
import '../Styles/arcadeButton.scss'
import axios from 'axios';

class ArcadeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Input Name Below",
      score: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  updateScore = () => {
    let { score } = this.state

    this.setState({
      score: score + 1
    })
  }

  setName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.post(
      'https://qo5ij7uikd.execute-api.us-east-2.amazonaws.com/production/leaderboard',
      null,
      {
        params: {
          name: this.state['name'],
          score: this.state['score']
        }
      }
    )
    window.location.reload(false);
  }

  render() {
    const { score } = this.state
    return (
      <div className="ArcadeButton">
        <p style={{fontSize: "36px"}}>Push It Real Good</p>
        <button className="push--flat" onClick={() => this.updateScore()}></button>
        <h3 score={score}>Score: {score}</h3>
        <form onSubmit={this.handleSubmit}>
          <input style={{ color: "black" }} type="text" placeholder="Player Name" onChange={this.setName} required></input>
          <button type="submit" >Submit Score</button>
        </form>
      </div>
    )
  }
}

export default ArcadeButton