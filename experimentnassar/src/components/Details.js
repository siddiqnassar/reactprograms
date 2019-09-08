import React from 'react';
import Axios from 'axios';
import './Details.css';
import User from './User';
import IdDetail from './IdDetail'
export default class Details extends React.Component{
    constructor(){
        super();
        this.state={
           status:"",
           value:null,
           details:[],
           idstatus:false,
           iddet:[]
        
        }
        this.AllDetails=this.AllDetails.bind(this);
        this.IdDetails=this.IdDetails.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value})
    }
    AllDetails(){
       
        Axios.get("http://localhost:8788/get").then(res=>(this.setState({details:res.data})));
        this.setState({status:true});
        console.log(this.state.details);
        console.log(this.state.status)
    }
    IdDetails(){
        let id=document.getElementById('i1').value;
        console.log(id);
        
        Axios.get(`http://localhost:8788/${id}`).then(res=>(this.setState({iddet:res.data})));
        if(this.state.iddet.name!==""){
            console.log(this.state.iddet.review)
            console.log(this.state.iddet.name)
            
          this.setState({idstatus:true})
        }

        console.log(this.state.idstatus)
    }
render(){
    return(
        <div className="hi">
               
               Enter id to search: <input type="number"  id="i1" onChange={this.handleChange}></input> <br></br>
               <br></br>
               <button className="btn bbb1" type="submit" id="id1" onClick={this.IdDetails}>GetIdDetails</button>
               <br></br>
               {this.state.idstatus===true?<IdDetail body={this.state.iddet.name} review={this.state.iddet.review}></IdDetail>:""}
               <button className="btn bbb" type="submit" id="b1" onClick={this.AllDetails}>getAllDetails</button>
               <br></br>
                
               {this.state.status===true?this.state.details.map((detail)=><User body={detail.name} reviews={detail.review}></User>):""}

        </div>
    )
}
}
