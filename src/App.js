import React from 'react'
import './styles.css'

// class AutoShrinkText extends React.Component {
//   state = {
//     scale: 1
//   }
//   componentDidUpdate(){
//     const node = this.node
//     const{offsetWidth} = node
//     const parentWidth = node.offsetParent.offsetWidth
//     if(scale > 1){
//       this.setState({
//         scale:1 / scale
//       })
//     } else {
//       this.setState({
//         scale:1
//       })
//     }
//   }

//   render(){

//     return <div {...this.props}
//     style={{transform: `scale(${scale},${scale})`}}
//      ref={node => this.node = node}/>
//   }
// }

class Calculator extends React.Component {

        constructor() {
            super();

            this.state = {
                value: null,
                display: 0,
                waitingforOperand: false,
                operator: null
            }
        }

        inputValue(digit) {
            const {
                display,
                waitingforOperand
            } = this.state

            if (waitingforOperand === true) {


                this.setState({
                    display: String(digit),
                    waitingforOperand: false
                })

            } else {

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
            const {
                display
            } = this.state
            if (display.indexOf(".") === -1) {
                this.setState({
                    display: display + "."
                })
            } else {
                this.setState({
                    display: display
                })
            }

        }

        operatorValue(nextOperator) {
            const {
                display,
                operator,
                value
            } = this.state
            const nextValue = parseFloat(display)

            const operations = {
                "/": (preValue, nextValue) => preValue / nextValue,
                "*": (preValue, nextValue) => preValue * nextValue,
                "+": (preValue, nextValue) => preValue + nextValue,
                "-": (preValue, nextValue) => preValue - nextValue,
                "=": (preValue, nextValue) => nextValue
            }

            if (value == null){
              this.setState({
                value: nextValue
              })
            } else if (operator){
              const currentValue = value || 0
              const computedValue = operations[operator](currentValue, nextValue)

              this.setState({
                value: computedValue,
                display: String(computedValue)
              })
            }

            this.setState({
                waitingforOperand: true,
                operator: nextOperator
            })
        }

  render() {
    // const { display } = this.state
    return (

      <div className="calculator">
        {/* <AutoShrinkText className="calculator-display"> {display} </AutoShrinkText> */}
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