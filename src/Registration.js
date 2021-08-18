import React, { Component } from 'react'

export class Registration extends Component {
    constructor(){
        super();
        this.state={ name:"",
                    email:"",
                    mobileno:"",
                   
                };
        }
        changeHandler = (event) =>  {
               let nam=event.target.name;
                let val=event.target.value;
            
                this.setState({[nam]:val});
                
                
            }
        submitHandler = (event) =>  {
            event.preventDefault();
            if(this.state.name=="" ){
                
                alert("Input name");
            }
            
            
            if(this.state.email==""){
                alert("Input email");
            }

            if(this.state.mobileno==""){
                alert("Input mobile number");
            }
            
            
        }

    render() {
        return (
            <div>
                <h1> Register now!</h1><br/>
                <pre>
                <form className="contact"  onSubmit={this.submitHandler}>
                    Name      <input type="text"  name="name" className="textbox" onChange={this.changeHandler}></input> <br/>
                    Email     <input type="text"  name="email" className="textbox" onChange={this.changeHandler}></input> <br/>
                    Mobile No <input type="text"  name="mobileno" className="textbox" onChange={this.changeHandler}></input> <br/>
                    Location  <input type="text"  className="textbox" ></input>  <br/>
                    Remarks   <input type="text"  className="textbox"  ></input> <br/>
                    
                    <br/>

                    <input type="submit" style={{padding:"5px", backgroundColor:"lightblue", color:"white", borderRadius:"20px", fontSize:"20px"}}></input>
                </form>
                </pre>

          </div>
        )
    }
}

export default Registration
