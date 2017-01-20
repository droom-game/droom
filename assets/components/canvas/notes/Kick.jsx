import React, { Component } from 'react';
import {Rect, Group} from 'react-konva';

// App component - represents the whole app
export default class Kick extends Component {
  componentDidMount() {
    if(this.props.hasToAnim)
      this.props.startAnimation(this.refs.note);
  }

  render() {
    let y = 0;
    if(this.props.y)
        y = this.props.y;

    if(!this.props.isKeyboard) {
      console.log("keyboard");
      return(
        <Group
          width={window.innerWidth}
          height={this.props.size}
          x={this.props.x}
          ref="note"
          y={-this.props.size + y}>
          <Rect
              fill="black"
              width={window.innerWidth}
              height={4}
              y={this.props.size*0.5}
          />
        </Group>
      )
    }
    return (
      <Rect
          ref="note"
          width={this.props.size}
          height={this.props.size}
          x={this.props.x}
          y={-this.props.size}
          fill="black"
          offset={{
            x:this.props.size*0.5,
            y:this.props.size*0.5
          }}
      />
    );
  }
}