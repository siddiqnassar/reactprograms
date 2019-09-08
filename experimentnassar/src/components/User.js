import React from 'react'

export default class User extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="hi">
                <p1>{this.props.body}</p1>
                <p1>{this.props.review}</p1>
            </div>
        )
    }
}