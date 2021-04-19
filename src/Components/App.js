import React, {Component} from 'react'
import ArcadeButton from './ArcadeButton'
import Leaderboard from './Leaderboard'

class App extends Component {
  render() {
      return (
        <div className="App center">
          <ArcadeButton></ArcadeButton>
          <Leaderboard />
        </div>
      )
    }
  }

  export default App