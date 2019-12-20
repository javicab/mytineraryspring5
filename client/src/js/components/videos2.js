/*
simple Image Carrousel
https://medium.com/@ilonacodes/simple-image-carousel-with-react-5e20933001bf
*/
// Videos.js
import React from 'react';
import arrowRight from '../../img/arrow-R.svg';
import arrowLeft from '../../img/arrow-L.svg';
import '../../css/videos.css';
//import { urlImages } from "../constants/action-types";

export default class Videos2 extends React.Component {
  constructor() {
    super();
    this.state = {
      // holding the current index for the image that has to be rendered at each time on the screen 
      currentImageIndex: 0,
      // array of the source links to the images, simple placeholders for now
      images: [
        '/imagesCities/bsas07.jpg',
        '/imagesCities/bsas08.jpg',
        '/imagesCities/bsas09.jpg',
        '/imagesCities/bsas10.jpg',
        '/imagesCities/bsas11.jpg',
        '/imagesCities/bsas12.jpg'
      ],
      // imported images of right and left arrows
      arrowNext: arrowRight,
      arrowPrev: arrowLeft
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1; // check if we need to start over from the last index again
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;// assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1; // check if we need to start over from the first index
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1; // assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    // get current image index
    const index = this.state.currentImageIndex; // create a new array with 5 videos from the source images
    let firstFiveVideo = this.state.images.slice(index, index + 2); // check the length of the new array (it’s less than 5 when index is near the end of the array)
    if (firstFiveVideo.length < 6) { // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
      firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 2 - firstFiveVideo.length))
    }


    return (
      <div>
        {/*// render images*/}
        {firstFiveVideo.map((image, index) =>
          <img className="videos-img" key={index} src={image} alt="" />
        )}
        <center>
          {/*// render the left arrow*/}
            <img src={this.state.arrowPrev} onClick={this.prevSlide} alt="" />
          {/*// render the right arrow*/}
            <img src={this.state.arrowNext} onClick={this.nextSlide} alt="" />
        </center>
      </div>
    );
  }
}
