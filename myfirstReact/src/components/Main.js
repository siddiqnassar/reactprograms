import React from 'react'
import {Link} from 'react-router-dom';
import Card from "./Card"
export default class Main extends React.Component{

    constructor(){
        super();
        this.state={
            phones:[]
        }
        this.selectedProduct=this.selectedProduct.bind(this);
        this.newPhone=this.state.phones
        this.activeLink=this.activeLink.bind(this);
    }
    selectedProduct(){
     
    }
    componentDidMount(){
        this.newPhone=[
            {
                name:'Iphone',
                desc:'Latest iphone from apple'
            },
            {
                name:'One plus 6',
                desc:'flagship from oneplus'
            },
            {
                name:'Samsung',
                desc:'High performance'
            }
        ]
        this.setState({
            phones:this.newPhone
        });
    }
    activeLink(){
        console.log("You have clicked it");
        
        alert("You have clicked!");


    }
    render(){

        return(
            <div className="left">
             
              {this.state.phones.map((phone,index) => <Card key={index} title={phone.name} body={phone.desc} />)}
              <button className="btn" onClick={()=>this.activeLink()}>Click here</button>
            </div>
        )
    }
}