import React from 'react'

export default class idDetail extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="hi">
                <p1>{this.props.body}</p1>
            </div>
        )
    }
}