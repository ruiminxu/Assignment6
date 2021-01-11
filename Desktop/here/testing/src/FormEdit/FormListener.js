import { Component } from "react";

export default class FormListener extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isEdit: false
        }
    }

    render()
    {
        const isE = this.state.isEdit;
        let x
        if(isE)
        {
            x = <input type="text" placeholder='Your Name' name = 'name'></input>
        }else{
            x = <h1>Hi</h1>
        }
        
        return(
            <div>{x}</div>
        );
        
    }
}