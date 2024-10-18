import React from 'react';
import '../assets/Portfolio.css'; 

export default function Portfolio() {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h1 className="align-self-start mb-4">Portfolio Page</h1>
      <div className="row justify-content-center">
        <div className="col-6 mb-4 position-relative portfolio-image-container">
          <img 
            src="https://media.istockphoto.com/id/1413876271/photo/lightning-strike-in-a-thunderstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lxq6Vc2ULpz0x2OdIiuHULJDrH9rJFencbHUUI_GpXM=" 
            alt="Placeholder 1" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">
              <a href="https://stormchasers.onrender.com/" target="_blank" rel="noopener noreferrer">
                stormChasers
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative portfolio-image-container">
          <img 
            src="https://media.istockphoto.com/id/1485996637/photo/top-view-team-engineer-building-inspection-use-tablet-computer-and-blueprint-working-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=bwQgxdmKYaZWbwCsb7smt6BK9R3YTl-WWg5Ostl_yXw="
            alt="Placeholder 2" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">
              <a href="https://github.com/vluu11/bobTheDbBuilder" target="_blank" rel="noopener noreferrer">
                bobTheDbBuilder
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative portfolio-image-container">
          <img 
            src="https://images.unsplash.com/photo-1511407401960-0ee203836665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZlaGljbGV8ZW58MHx8MHx8fDA%3D" 
            alt="Placeholder 3" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">
              <a href="https://github.com/vluu11/VehicleBuilder" target="_blank" rel="noopener noreferrer">
                VehicleBuilder
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4 position-relative portfolio-image-container">
          <img 
            src="https://plus.unsplash.com/premium_photo-1682145789553-d79251a7fae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Placeholder 4" 
            className="img-fluid portfolio-image" 
          />
          <div className="overlay">
            <div className="text">
              <a href="https://github.com/vluu11/readMeGen" target="_blank" rel="noopener noreferrer">
                readMeGen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
