import { Component } from 'react';
import './Box.css'
import Bt from './ClickBt';
import Status from './Status';

class MenuBox extends Component {
  state = {
    count: 0,
  }

  handleCallback = (childData) => {
    if (this.state.count === 10 && childData === 1) {
      return alert('Cannot Vote more');
    }
    if (this.state.count === 0 && childData === -1) {
      return alert('Cannot Unvote');
    }

    this.setState({ count: this.state.count + childData })
  };

  statusDisplay = (count) => {
    if (count >= 10) {
      return "MAX";
    }
    else if (count <= 0) {
      return "MIN";
    }

    return count;
  }

  render() {
    return (
      <div className="container">
        <div className='top-section'>
          <div>
            <h2>{this.props.foodType}</h2>
            <p><strong>{this.props.menuName}</strong></p>
            <p>{this.props.describtion}</p>
          </div>
          <div>
            <img src={this.props.src} alt="foods" />
          </div>
        </div>
        <div className='bt-section'>
          <Bt title="Click to Vote" parentCallback={this.handleCallback} />
          <Status count={this.statusDisplay(this.state.count)} />
          <Bt title="Click to Unvote" parentCallback={this.handleCallback} />
        </div>
      </div>
    );
  }
}

export default MenuBox;
