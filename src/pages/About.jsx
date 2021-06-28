import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const About=()=>{
return(
    <>
  <Breadcrumb/>
  
  <section className="about-block space">
    <div className="container">
      <div className="row">
        <div className="col-6 about-left">
     
          <h1>Welcome To Shop</h1>
       
<p>Sed convallis magna in tortor fermentum, sit amet accumsan diam malesuada, 
  Aliquam urna turpis, sodales et tempor nec, dignissim eu odio, Vivamus et
   mattis urna, Praesent ullamcorper ut est non lobortis, Praesent dignissim 
   et erat a luctus, Pellentesque imperdiet, lacus quis euismod elementum,
    est quam sagittis tellus, sit amet ullamcorper erat nibh a dolor, Proin
     tincidunt eu sapien quis sollicitudin, In a turpis sed tortor semper 
     imperdiet, Duis eu interdum enim, Donec rutrum nunc eros, Vivamus eu
      massa dignissim, interdum dolor ac, commodo nibh, Phasellus ipsum justo,
       ullamcorper nec fringilla ut, condimentum vel elit, Mauris tincidunt
        dui eu velit dapibus, tempor blandit massa accumsan, Sed

</p>
        </div>
        <div className="col-6 about-right">
        <img src='../images/about.jpg' className="about-img"/>
        </div>
      </div>
    </div>
  </section>
    </>
)
}
export default About;