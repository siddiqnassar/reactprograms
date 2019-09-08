import React from 'react'
import ReactDOM from 'react-dom';
import User from './User'
import Axios from 'axios';
import './Main.css'
import Data from './Data'
import Mail from './Mail'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            phones:[],
            userdata:[],
            value:null,
            status:"",
            details:[]

        }
        this.selectedProduct=this.selectedProduct.bind(this);
        this.add=this.add.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.Click=this.Click.bind(this);
        this.ValidatePassword=this.ValidatePassword.bind(this);
    }
   selectedProduct(){

   }
   componentDidMount(){
       this.newPhone=[
            {
                name:'Samsung a9',
                ram:'6GB'
            },
        {
            name:'Redmi note 3',
            ram:'3GB'
        }
       ]
       this.setState({
           phones:this.newPhone,

       });
       
   }
   add(){

console.log('button is clicked')
Axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{this.setState({userdata:res.data})});
 
   }
   handleChange(e)
   {
       this.setState({value:e.target.value})
   }
   Click(){
       
      
       console.log(document.getElementById('i1').value)
       let pwd=document.getElementById('p1').value;
       let cpwd=document.getElementById('p2').value;
       if(pwd===cpwd)
      
       {
       let data={
           name:document.getElementById('i1').value,
           password:document.getElementById('p2').value,
           review:[document.getElementById('i3').value]
           
       
           

       }
       Axios.post("http://localhost:8788/givename",data).then(res=>{
           this.setState({status:res.data}) }).then(
               ()=>{
                if(this.state.status===true){
                    window.location.assign("http://localhost:3000/abc")
                }
               }
           )
         }
         
    
console.log(this.state.status)
     
       
   }
   ValidatePassword(){
    //this.copy();
   // console.log("vpwd");
   let  pwd = document.getElementById("p1").value;
   let  cpwd = document.getElementById("p2").value;
 // console.log(cpwd);

   if (pwd.length===0) 
     document.getElementById("msg1").innerText="Please enter password";
   else
     document.getElementById("msg1").innerText="  ";
   if (cpwd.length===0)
      document.getElementById("msg2").innerText="Please enter confirm password";
   else
      document.getElementById("msg2").innerText="  ";  
      
      
    // If confirm password not entered 
if (pwd !==cpwd  && pwd.length!==0 && cpwd.length!==0)   
  document.getElementById("msg2").innerText="Password did not match: Please try again...";
else if (pwd===cpwd && pwd.length>0){

    document.getElementById("msg2").innerText="  ";
   // document.getElementById("msg2").innerText=this.checkScore();
}
   
}
   Take(){
       let id=document.getElementById('i4').value;
       console.log('Hii')
       console.log(id)
       Axios.get("http://localhost:8788/helo",id).then(res=>this.setState({details:res.data,status:true}))
   }
   render(){
       return(
           <div className="buttontype" >
              { this.state.phones.map((phone)=><User body={phone.name} spec={phone.desc}></User>)}            
             <button onClick={this.add}>Click add</button>
             {this.state.userdata.map((user)=><Data body={user.name}></Data>)}
             <Link to={`/Login`} body={"hii"}>Login here</Link> 
             <div>
               Enter name Add:  <input type="text"  id="i1" onChange={this.handleChange} ></input> <br></br>
               Enter Password: <input type="password"  id="p1" onChange={this.handleChange} onKeyUp={this.ValidatePassword}></input> <br></br><span id="msg1"/>  <br/>
               Confirm password: <input type="password"  id="p2" onChange={this.handleChange} onKeyUp={this.ValidatePassword}></input> <br></br><span id="msg2"/>  <br/>
               Enter Reviews: <input type="text"  id="i3" onChange={this.handleChange}></input> <br></br>
                 <button className="btn" type="submit" id="b1" onClick={this.Click}>Click</button> <br>
                 </br>
                 <Link to="/getdetails">Get Details</Link><br></br>
               
       
           </div>

           </div>
           
       )
   }
}