import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
     
      
      <Button className="btn btn-success"> 

        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="4">4</button>
        <button value="5">5</button>
        
      </Button>
      
    )
  }
  
}

class Button extends React.Component {

  constructor() {
    super();

    this.state = {
      selected: '',
      selected2: ''
     }
  }

  //   selecitem2 (selected2) {  
  //   this.setState({selected2})
 
  // }

  update(e){
    this.setState({
    a: e.target.value,
    b: e.target.value 
    })
  }

  render() {

    // let fn = child =>
    //   React.cloneElement(child, { 
    //     onClick: this.update.bind(this, child.props.value)
    //   })

    let items = React.Children.map(this.props.children)
     return (
       <div>
         <input type="text"  ref="a" onChange={this.update.bind(this)}/>
         {this.state.a}
          <br/>

          <input type="text" ref="b" onChange= {this.update.bind(this)}/>{this.state.b} <br/>

         
       </div>
     )
  }
}

export default App;
