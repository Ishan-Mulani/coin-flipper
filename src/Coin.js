import React, { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  static defaultProps = {
    imgSrc: "",
  };
  render() {
    const { imgSrc } = this.props;
    return (
      <div className="Coin">
        <img className="Coin-Img" src={imgSrc} />
      </div>
    );
  }
}

export default Coin;
