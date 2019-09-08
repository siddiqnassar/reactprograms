import React from 'react'
export default class Data extends React.Component{
constructor(){
    super();

}
render(){
    return(
        <div className="hii">
           <h1>{this.props.body}</h1> 
        </div>
    )
}
}