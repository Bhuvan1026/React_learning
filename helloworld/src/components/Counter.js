import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    //set state takes 2 arguments
    
    increment(){
        this.setState({
        count:this.state.count+1,
        },
        ()=>{console.log("callback value",this.state.count)}
        
    )
    console.log(this.state.count)
}
    decrement(){
        this.setState({
            count:this.state.count-1
        })
        console.log(this.state.count)
    }

 
    





  render() {
    return (
      <div>
        <h1>count-{this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={()=> this.decrement()}>Decrement</button>
        
      </div>
    )
  }
}

export default Counter
  