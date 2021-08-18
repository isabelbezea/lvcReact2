import React, { Component } from 'react'
import Iframe from 'react-iframe'
import img1 from './cl1.jpg'
import img2 from './cl2.jpg'
import img3 from './cl3.jpg'
import img4 from './cl4.jpg'
import img5 from './cl5.jpg'
import img6 from './cl6.jpg'
import img7 from './cl7.jpg'
import img8 from './cl8.jpg'

export class Contact extends Component {
    render() {
        return (
            <div className="gallerycontainer">
                <h1> Check out our gallery and choose to be one of us!</h1><br/><br/>

                <div class="row" className="image-row">
                    <div class="column">
                        <img src={img1} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img2} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img3} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img4} style={{width:"250px",height:"200px"}}/>
                    </div>
                 </div>
<br/> <br/>

                 <div class="row" className="image-row">
                    <div class="column">
                        <img src={img5} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img6} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img7} style={{width:"250px",height:"200px"}}/>
                    </div>
                    <div class="column">
                        <img src={img8} style={{width:"250px",height:"200px"}}/>
                    </div>
                 </div>


                
          </div>
        )
    }
}

export default Contact
