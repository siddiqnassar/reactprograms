import React from 'react'

export default class Login extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="hi">
               <h1>Hello from login</h1>
               <h1>{this.props.location.body}</h1>
            </div>
        )
    }
}