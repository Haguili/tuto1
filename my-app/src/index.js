import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    constructor(props){
      super(props); 
      // we need props for the value

      /* In JavaScript classes, you need to always call super when defining the constructor
       of a subclass. All React component classes that have a constructor should start with a
      super(props) call.
      */

      this.state={value:null,};

      // value X or not 


    }


    render() {
      return (
        // the square is actually a button
        <button className="square" onClick={() => this.setState({value: 'X'})} >
          {//this.props.value but we change it to state
          this.state.value
          
          }
        </button>
      );
    }
  }
  /* To save typing and avoid the confusing behavior of this, 
  we will use the arrow function syntax for event handlers 
  so  we replaced : onClick={function() {alert('click');}}
  with onclick{function() => alert('click') }
  */

  /* Notice how with onClick={() => alert('click')},
   we’re passing a function as the onClick prop. 
   React will only call this function after a click. 
   Forgetting () => and writing onClick={alert('click')} is a common mistake, 
   and would fire the alert every time the component re-renders.

  */

  /* onClick={() => this.setState({value: 'X'})}
Square’s this.state.value will be 'X', so we’ll see the X on the game board


  */
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = { squares : Array(9).fill(null),};


    }

    renderSquare(i) {
      // return <Square value={i} />;
      return <Square value={this.state.squares[i]} /> ;

    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  