import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    text: 42,
  }
  
  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      text: await this.asyncFunc(),
    });
  }

  render() {
    return (
      <div>
        <h2>Hello react {this.state.text} </h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
