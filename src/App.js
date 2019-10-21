import React, { Component } from 'react';
import './App.css';

// Stateless PlayerCard Component
const PlayerCard = ({color, symbol}) => {
  const style = {
    backgroundColor: color,
    backgroundImage: "url(./img/" + symbol + ".png)",
    borderRadius: 100,
    border: "2px solid white"
  }
  return (
    <div style={style} className="player-card">
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.symbols = ["rock", "paper", "scissors"];
    this.state = {};
  }

  decideWinner = () => {
    // Using destructor
    const { playerBlue, playerRed } = this.state;
    if (playerRed == playerBlue) {
      return "It's a draww!!!"
    }
    if(
      (playerRed === "rock" && playerBlue === "scissors") ||
      (playerRed === "paper" && playerBlue === "rock") ||
      (playerRed === "scissors" && playerBlue === "paper")){
        return "Red Player Wins!!!";
    }
    // if player red is not the winner, player blue by default becomes the winner
    return "Blue Player Wins!!!";
  }

  // Run method when 'Run Game' button is clicked
  runGame = () => {
    let counter = 0;
    let randomPickInterval = setInterval(() => {
      counter++;
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random()*3)],
        playerBlue: this.symbols[Math.floor(Math.random()*3)],
        winner: ""
      })
      if(counter > 40) {
        clearInterval(randomPickInterval);
        this.setState({ winner: this.decideWinner() });
      }


    }, 100)
  }

  render() {
    return (
      <div>
        <h1>ROCK PAPER and SCISSSORSS!</h1>
        <div className="App">
          <PlayerCard 
            color="red"
            symbol={this.state.playerRed}
          />
          <PlayerCard 
            color="blue"
            symbol={this.state.playerBlue}
          />
          <p>{ this.state.winner }</p>
          <button onClick={this.runGame}>Run Game</button>
        </div>
      </div>
    );
  }
}

export default App;
