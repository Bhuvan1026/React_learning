import React,{Component} from "react";
//here state is used which helps in change the message unlike props 
//in props once declared we cant change .for this we use state
//we use constructor for initiall message
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitors',
            // message1:'second message'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for clicking',
            message1:'helo'
        }
    )}



    render(){
        return <> 
        <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.message1}</h2>
        <button onClick={()=> this.changeMessage()}>Click me</button>
        </div>

        </>
    }
}
export default Message