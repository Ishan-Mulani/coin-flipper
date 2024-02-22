import React, { Component } from "react";
import Coin from "./Coin";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headCount: 0,
      totalCount: 0,
      isHead: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  incrementTotalCount(currentState) {
    return { totalCount: currentState.totalCount + 1 };
  }
  incrementHeadCount(currentState) {
    return { headCount: currentState.headCount + 1 };
  }
  handleClick() {
    this.setState(this.incrementTotalCount);
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 1) {
      this.setState({ isHead: true });
      this.setState(this.incrementHeadCount);
    }
  }
  render() {
    const { headCount, totalCount, isHead } = this.state;
    const imgSrc =
      totalCount > 0 ? (isHead ? "images/Head.jpg" : "images/Tail.jpg") : "";
    return (
      <div>
        <Coin imgSrc={imgSrc} />
        {/* <img src="images/Head.jpg" /> */}
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
