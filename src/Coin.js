import React, { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="Coin">
        <img className="Coin-Img" src={info.imgSrc} alt={info.side} />
      </div>
    );
  }
}

export default Coin;
