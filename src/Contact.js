import React, { Component } from 'react'
import Iframe from 'react-iframe'
export class Contact extends Component {
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
                <h1> Contact us</h1><br/>
                <pre>
                <form className="contact"   onSubmit={this.submitHandler}>
                    Name      <input type="text" name="name" className="textbox" onChange={this.changeHandler} ></input> <br/>
                    Email     <input type="text" name="email" className="textbox" onChange={this.changeHandler}></input> <br/>
                    Mobile No <input type="text" name="mobileno" className="textbox"  onChange={this.changeHandler}></input> <br/>
                    Location  <input type="text" className="textbox"></input>  <br/>
                    Remarks   <input type="text" className="textbox"></input> <br/>
                    

                    <input type="submit" style={{padding:"5px", backgroundColor:"lightblue", color:"white", borderRadius:"20px", fontSize:"20px"}}></input>
                

                </form>
                </pre>

                <h1> You cand find us here</h1><br/>
                <Iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855147.181029289!2d24.131998646535816!3d45.66628949929076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200e37fa54653%3A0x9dc6ea1eef9ccdaa!2sAccenture%20Rom%C3%A2nia!5e0!3m2!1sro!2sro!4v1628770547012!5m2!1sro!2sro" width="600" height="450" style={"border:0"} allowfullscreen="" loading="lazy"></Iframe>
         <br/>
          </div>
        )
    }
}

export default Contact
