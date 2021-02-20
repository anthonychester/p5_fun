import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    this.cont = 0;
    this.color_back = "#fff";
    this.color_text = "#000";
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  renderSquare = (i) => {
    //console.log(i);
    //return <p>i</p>;
  };

  draw = (p5) => {
    //p5.fill(234, 31, 81);
    if (this.cont === 30) {
      if (this.color_back === "#000") {
        this.color_back = "#fff";
        this.color_text = "#000";
      } else {
        this.color_back = "#000";
        this.color_text = "#fff";
      }
      this.cont = 0;
    }
    p5.fill(this.color_back);
    p5.noStroke();
    p5.rect(50, 50, 250, 250);
    p5.fill(this.color_text);
    p5.textStyle(p5.BOLD);
    p5.textSize(140);
    p5.text("p5*", 60, 250);
    p5.fill(100);
    p5.textSize(50);
    p5.text(this.cont, 50, 100);

    this.cont = this.cont + 1;
    //console.log(this.cont);
    this.renderSquare(this.cont);
  };

  Square = (Square) => {
    return <button className="square">{/* TODO */}</button>;
  };

  renderSquare(i) {
    return <this.Square />;
  }

  Game = (Game) => {
    return (
      <div className="game">
        <div className="game-board">
          <renderSquare />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  };

  render() {
    return (<this.Game />), (<Sketch setup={this.setup} draw={this.draw} />);
  }
}
