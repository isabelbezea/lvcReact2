import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, StaticRouter, Link } from 'react-router-dom'
import Registration from './Registration'
import Product from './Product'
import Contact from './Contact';
import Gallery from './Gallery'
import Help from './Help'
import Blog from './Blog'
import Iframe from 'react-iframe'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Home from './Home';






const routing = 
(
  <Router>
    <div>
    <header className="App-header">
     <p>
       LIVE VIRTUAL CLASS
     </p>
   </header>

 
    
   <nav id="navigationbar">
    <ul>
   <li> <a id="home"><Link to="/">Home</Link></a> &nbsp; &nbsp; </li> 
   {/* <li> <a ><Link to="/Courses">All courses</Link></a> &nbsp; &nbsp; </li> */}
   
   

   <li>
              <Link class="desktop-link" to="/Product">All courses {'>'}</Link>
              <ul>
                <li><a href="#">MEAN Stack</a></li>
                <li><a href="#">RPA</a></li>
                <li><a href="#">DevOps</a></li>
                <li>
                <a href="#" class="desktop-link">Java {'>'}
                  <span class="fa fa-plus"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </a>
            
                <ul>
                  <li><a href="https://www.pluralsight.com/browse/software-development/java?aid=7010a000002BWqGAAW&promo=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=EMEA_Dynamic&utm_content=&gclid=Cj0KCQjwvO2IBhCzARIsALw3ASo_BAtjSAIbYT3PeBq7Wz7sW2V7SF43qyQEz_ZB-EeCOCBFTyI3ZEIaAterEALw_wcB">Adv Java</a></li>
                  <li><a href="#">Core Java</a></li>
                 
                </ul>
              </li>
              </ul>
            </li>


   <li> <a ><Link to="/Registration">Registration</Link></a>  &nbsp; &nbsp;  </li>
   <li> <a ><Link to="/Gallery">Photo Gallery</Link></a>  &nbsp; &nbsp; </li>
   <li> <a ><Link to="/Blog">Blog</Link></a>  &nbsp; &nbsp; </li>
   <li> <a ><Link to="/Help">Help</Link></a>  &nbsp; &nbsp; </li>
    <li><a > <Link to="/Contact">Contact us</Link></a>   &nbsp; &nbsp; </li>

    </ul>
    
</nav>


      <Route exact path="/" component={Home}/>
      <Route path="/Registration" component={Registration} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Blog" component={Blog} />
      <Route path="/Help" component={Help} />
    
     

      <footer >
              Website Designed & Developed by: Isabel

      </footer>
    </div>
  </Router>

);
$(document).ready(function(){

 
  $('.dropdown-submenu a.test').on("click", function(e){
  
   
  $(this).next('ul').toggle();
  
   
  e.stopPropagation();
  
   
  e.preventDefault();
  
   
  });
  
   
  });
ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
