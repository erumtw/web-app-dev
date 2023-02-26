import { Component } from "react";
import "./ClickBt.css"


class Bt extends Component {
  handleClick = () => {
    if (this.props.title === "Click to Vote") {
      this.props.parentCallback(1);
    }
    else if (this.props.title === "Click to Unvote") {
      this.props.parentCallback(-1);
    }
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.title}</button>
    );
  }
}

export default Bt;