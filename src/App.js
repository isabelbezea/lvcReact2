import learning from './learning-steps.PNG';
import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, StaticRouter, Link } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      course:"Mean Stack"
      
    };  
    this.handleChange = this.handleChange.bind(this)
}
  handleChange(e) {
    this.setState({course: e.target.value});
   if(e.target.value=="Java"){
     document.getElementById("coursedescription").innerHTML="In this Introduction to Java Programming training course, you gain extensive hands-on experience writing, compiling, and executing Java programs. You will learn to build robust applications that use Java’s object-oriented features. Java is known for reliability, maintainability, and ease of development. Its unique architecture enables programmers to develop a single application that can seamlessly run across multiple platforms. Attend this course and learn to leverage these key features.";
   }
   if(e.target.value=="Mean Stack"){
    document.getElementById("coursedescription").innerHTML="This program will advance your career as a MEAN stack developer. You’ll learn top skills such as MongoDB, Express.js, Angular, and Node.js (“MEAN”), plus GIT, HTML, CSS, and JavaScript to build and deploy interactive applications and services.";
  }
  if(e.target.value=="RPA"){
    document.getElementById("coursedescription").innerHTML="This course is an introduction into the fundamentals of Robotic Process Automation (RPA) and how it is transforming the world by combining software robotics with the power of artificial intelligence (AI) and machine learning (ML). "
  }
  if(e.target.value=="DevOps"){
    document.getElementById("coursedescription").innerHTML="The DevOps course syllabus spans several topics which are considered vital for the fundamental understanding of the domain. It is designed to cover the intrinsic segments as well, such as the history of DevOps, objectives, software development life cycle, virtual development and management tools"
    }
  
  }
  


render() {
  const options = [
    {
      label: "Mean Stack",
      value: "Mean Stack"
    },
    {
      label: "Java",
      value: "Java"
    },
    {
      label: "RPA",
      value: "RPA"
    },
    {
      label: "DevOps",
      value: "DevOps"
    }

  ];

  return (
    <div className="App">
    

      {/* <div id="professional">
      Most important course for the professional  
      <input type="text" className="textbox"></input>
      <input type="text" className="textbox"></input>
      <input type="text" className="textbox"></input>
    </div>
     */}

     <div className="search">
    <div class="d-flex flex-row-reverse">
      <div class="p-2">
  <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>

</div>
  </div>
  
              </div>




      </div>
    
     


  );
}

}




export default App;
