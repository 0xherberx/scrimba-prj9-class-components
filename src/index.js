
import React from "react"
import ReactDOM from "react-dom"

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
/*function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Pippo"/>
                <Greeting />
            </div>
        )
    }
}*/

// #2
/*function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}*/

// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
/*function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}*/

/* State conversion example
  export default class App extends React.Component {

     state = {
      goOut: "Yes"
    }
  
  
  toggleGoOut = () => {
      this.setState(prevState => {
          return {
              goOut: prevState.goOut === "Yes" ? "No" : "Yes"
          }
      })
  }
  
  render() {
      return (
          <div className="state">
              <h1 className="state--title">Should I go out tonight?</h1>
              <div className="state--value" onClick={this.toggleGoOut}>
                  <h1>{this.state.goOut}</h1>
              </div>
          </div>
      )
  }
}

*/

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 * 
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

/*export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

BECOMES:
*/
export default class App extends React.Component {
    
  state = {
      count: 0
  }
  
  add = () => {
      this.setState(prevState => {
          return {...prevState, count: prevState.count + 1}
      })
  }
  
  subtract = () => {
      this.setState(prevState => ({...prevState, count: prevState.count - 1}))
  }
  
  render() {
      return (
          <div className="counter">
              <button className="counter--minus" onClick={this.subtract}>–</button>
              <div className="counter--count">
                  <h1>{this.state.count}</h1>
              </div>
              <button className="counter--plus" onClick={this.add}>+</button>
          </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
