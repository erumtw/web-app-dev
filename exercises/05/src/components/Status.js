import { Component } from "react";
import "./Status.css";

class Status extends Component {
  render() {
    return (
      <div class="count">
        {this.props.count}
      </div>
    )
  }
}

export default Status;