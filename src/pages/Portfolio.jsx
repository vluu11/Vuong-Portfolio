import React from 'react';
import '../assets/Portfolio.css'; 

export default function Portfolio() {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h1 className="align-self-start mb-4">Portfolio Page</h1>
      <div className="row justify-content-center">
        <div className="col-6 mb-4 position-relative">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Placeholder 1" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">Description for Image 1</div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Placeholder 2" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">Description for Image 2</div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Placeholder 3" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">Description for Image 3</div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Placeholder 4" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">Description for Image 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
