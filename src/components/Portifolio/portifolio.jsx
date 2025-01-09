import React, { useState } from 'react';
import port1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Portifolio() {
  // console.log("clicked");
document.title='Portifolio';

  
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <div className="text-center">
      <h2 className='mt-5'>portfolio component</h2>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="line me-3 bg-black"></div>
         <FontAwesomeIcon icon={faStar} className='text-black' />
        <div className="line ms-3 bg-black"></div>
      </div>
      <div className="container">
        <div className="row gy-3 overflow-hidden mb-5">
          <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port1)}>
              <img src={port1} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port2)}>
              <img src={port2} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port3)}>
              <img src={port3} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
           <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port1)}>
              <img src={port1} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port2)}>
              <img src={port2} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative overflow-hidden">
            <div className="image-container" onClick={() => handleShow(port3)}>
              <img src={port3} className="w-100 rounded-3 overflow-hidden" alt="" />
              <div className='position-absolute overlay top-0 bottom-0 start-0 end-0 rounded-3 m-auto d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faPlus} className=" icon text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={selectedImage} className="w-100" alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}
document.title='Portifolio';