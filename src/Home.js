import React, { Component } from 'react'
import jslogo from './js.png'
import htmllogo from './html.png'
import csslogo from './csss.jpg'

export class Home extends Component {
    render() {
        return (
          
          <div>
          <div class="container">
          <div class="row">
            <div class="col-8">
            <h1> Welcome to the HOME PAGE</h1>
            </div>
            <div class="col" id="searchcont">
            
            <div class="container">
            <br/>
          <div class="row justify-content-center">
                                <div class="col-12 col-md-10 col-lg-8">
                                    <form class="card card-sm">
                                        <div class="card-body row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <i class="fas fa-search h4 text-body"></i>
                                            </div>
                                         
                                            <div class="col">
                                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics"/>
                                            </div>
                                         
                                            <div class="col-auto" >
                                                <button class="btn btn-lg btn-success" type="submit" >Search</button>
                                            </div>
                                         
                                        </div>
                                    </form>
                                </div>
                             
                            </div>
        </div>
            </div>
           
          </div>
       
</div>
            <div className="courses">
             <h1> Most important courses for programmers: </h1>
            <div class="card" style={{width: "20rem"}}>
            <img class="card-img-top" src={jslogo} style = {{ height: "10rem"}} alt="Card image cap"></img>
          
            <div class="card-body">
              <h5 class="card-title">JavaScript</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
             
            </div>
          </div>

          <div class="card" style={{width: "20rem"}}>
            <img class="card-img-top" src={htmllogo} style = {{ height: "10rem"}} alt="Card image cap"></img>
          
            <div class="card-body">
              <h5 class="card-title">HTML</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
             
            </div>
          </div>

          <div class="card" style={{width: "20rem"}}>
            <img class="card-img-top" src={csslogo} style = {{ height: "10rem"}}alt="Card image cap"></img>
          
            <div class="card-body">
              <h5 class="card-title">CSS</h5>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
             
            </div>
            </div>
          </div>
         



          </div>
       
        )
    }
}

export default Home
