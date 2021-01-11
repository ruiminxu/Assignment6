import { Component } from "react";
import FormListener from './FormListener'

export default class FormEdit extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            firstName: 'Mark'
            ,
            lastName: 'Gold'
            ,
            isEdit: false
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    handleFirstNameChange = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleIsEdit()
    {
        this.setState((prevState) => ({
            isEdit: true
        }))
    }

    handleIsEditToTrue()
    {
        this.setState((prevState) => ({
            isEdit: true
        }))
    }

    handleIsEditToFalse()
    {
        this.setState((prevState) => ({
            isEdit: false
        }))
    }

    handleOnCancel()
    {
        this.setState((prevState) => ({
            firstName: prevState.firstName,
            lastName: prevState.lastName,
            isEdit: false
        }))
    }

    
    render()
    {
        const isEditCheck = this.state.isEdit
        let x
        
        if(!isEditCheck)
        {
            x = <div>
                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
                <button onClick = {() => this.handleIsEdit()}>Edit</button>
                </div>
        }else{
           x = <form onSubmit={this.handleSubmit}>
                <div><input type = 'text' placeholder="Your FirstName" name = 'firstName' onChange= {this.handleFirstNameChange}></input></div>
                <div><input type = 'text' placeholder="Your FirstName" name = 'lastName' onChange = {this.handleLastNameChange}></input></div>
                <button onClick = {() => this.handleIsEditToFalse()}>Save</button>
                <button onClick = {() => this.handleOnCancel()}>Cancel</button>
           </form>
        }
        const fullName = this.state.firstName
        return(
            <div>
                {x}  
            </div>
        );


    }
}