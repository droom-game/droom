import React, { Component } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import BaseDrum from './components/BaseDrum.jsx';
import Notes from './components/Notes.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width:null,
      height:null,
      keyCode:null,
      group:null
    };
  }

  updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight});
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      document.addEventListener("keydown",this.handleKey.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  handleKey(e) {
    this.setState({
      keyCode:e.keyCode
    });
  }

  handleGroup(val) {
    this.setState({
      group:val
    });
  }

  render() {
    return (
      <div className="container">
        <main>
          <Stage width={this.state.width} height={this.state.height}>
            <BaseDrum handleGroup={this.handleGroup.bind(this)}/>
            <Notes keyCode={this.state.keyCode} group={this.state.group}/>
          </Stage>
        </main>
      </div>
    );
  }
}
