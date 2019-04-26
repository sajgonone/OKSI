import React, { Component } from 'react'

export class Gallery extends Component {
  render() {
    return (

        
          <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
        
        <div class="carousel-inner jeden" role="listbox">
        <h1>GDZIES TU BEDA ZDJECIA / OPISY ITD</h1>

        <div class="carousel-item active">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
        alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg"
        alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
        alt="Third slide"/>
    </div>
  </div>

  <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
  <ol class="carousel-indicators">
    <li data-target="#carousel-thumb" data-slide-to="0" class="active"> <img class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" className="img-fluid" alt="1"/>
        </li>
    <li data-target="#carousel-thumb" data-slide-to="1"><img class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" className="img-fluid" alt="1"/>
    </li>
    <li data-target="#carousel-thumb" data-slide-to="2"><img class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" className="img-fluid" alt="1"/></li>
  </ol>
</div>
      
    )
  }
}

export default Gallery

