import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helper";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headCount: 0,
      totalCount: 0,
      currCoin: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    coins: [
      { side: "Heads", imgSrc: "images/Head.jpg" },
      { side: "Tails", imgSrc: "images/Tail.jpg" },
    ],
  };

  handleClick(e) {
    const newCoin = choice(this.props.coins);
    this.setState((currState) => {
      return {
        ...currState,
        currCoin: newCoin,
        totalCount: currState.totalCount + 1,
        headCount: currState.headCount + (newCoin.side == "Heads" ? +1 : 0),
      };
    });
  }
  render() {
    console.log("$$$$$$$$", this.props.coins);
    const { headCount, totalCount, currCoin } = this.state;
    return (
      <div>
        {currCoin && <Coin info={currCoin} />}
        <p>
          Out of {totalCount}, there have been {headCount} heads and{" "}
          {totalCount - headCount} tails.
        </p>
        <button onClick={this.handleClick}>Flip Coin</button>
      </div>
    );
  }
}
export default Flipper;
