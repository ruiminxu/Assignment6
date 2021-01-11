import { Component } from "react";

class IncreDecre extends Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment()
    {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        
    }

    decrement()
    {
        let num = this.state.count;
        
        if(num === 0)
        {
            
            return;
        }else{

            this.setState((prevState) => (
                {
                    count: prevState.count - 1
                }))
        }
        
        
        
    }

    render()
    {
        const num = this.state.count;
        let x
        if(num === 0)
        {
            x = <h1>The number is zero</h1>
        }else{
            x = <h1>{this.state.count}</h1>
        }

        return(
           <div> 
               <button onClick = {() => this.increment()}>Increment</button>
               <button onClick = {() => this.decrement()}>Decrement</button>
               {x}
           </div>

        );
    }
    
}



export default IncreDecre
