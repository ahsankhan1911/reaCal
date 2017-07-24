import React from 'react'
//import ReactDOM from 'react-dom'
import './styles.css'

class Calculator extends React.Component {

  constructor() {
    super();

    this.state = {
      preVal: 0,
      display: 0,
      waitingforOperand: false
      
    }

  }

  inputValue(digit) {
    const { display, waitingforOperand, preVal
     } = this.state
    
    if (waitingforOperand === true) {

     
      this.setState({
        preVal: display,
        display: String(digit),
        waitingforOperand: false
      })
      console.log(preVal)
    }
    else {

      this.setState({
        display: String(display + digit)
      })
    }
  }

  clearValue() {

    this.setState({
      display: 0,
  
    })
  }

  dotValue() {
    const { display } = this.state
    if (display.indexOf(".") === -1) {
      this.setState({
        display: display + "."
      })
    }

    else {
      this.setState({
        display: display
      })
    }

  }

  operatorValue(operator) {

  

    
        if (operator === "=") {
          
       this.setState({
          equals : Number(this.state.display) +  Number(this.state.display)
       })
     
    }
    
      // this.setState({
        

      // })
    
     this.setState({

      waitingforOperand: true,
      operator: operator
    })
  

  }

  render() {
    const { display } = this.state
    return (

      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" onClick={() => this.clearValue()}>AC</button>
              <button className="calculator-key key-sign">±</button>
              <button className="calculator-key key-percent">%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-0" onClick={() => this.inputValue(0)}>0</button>
              <button className="calculator-key key-dot" onClick={() => this.dotValue()} >●</button>
              <button className="calculator-key key-1" onClick={() => this.inputValue(1)}>1</button>
              <button className="calculator-key key-2" onClick={() => this.inputValue(2)}>2</button>
              <button className="calculator-key key-3" onClick={() => this.inputValue(3)}>3</button>
              <button className="calculator-key key-4" onClick={() => this.inputValue(4)}>4</button>
              <button className="calculator-key key-5" onClick={() => this.inputValue(5)}>5</button>
              <button className="calculator-key key-6" onClick={() => this.inputValue(6)}>6</button>
              <button className="calculator-key key-7" onClick={() => this.inputValue(7)}>7</button>
              <button className="calculator-key key-8" onClick={() => this.inputValue(8)} >8</button>
              <button className="calculator-key key-9" onClick={() => this.inputValue(9)}>9</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" onClick={() => this.operatorValue("/")}>÷</button>
            <button className="calculator-key key-multiply" onClick={() => this.operatorValue("*")}>×</button>
            <button className="calculator-key key-subtract" onClick={() => this.operatorValue("-")}>−</button>
            <button className="calculator-key key-add" onClick={() => this.operatorValue("+")}>+</button>
            <button className="calculator-key key-equals" onClick={() => this.operatorValue("=")}>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;