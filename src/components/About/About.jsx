import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function About() {
  document.title='About';

  return (
    <div className=" home d-flex justify-content-center align-items-center flex-column ">
    <h1 className="mb-5 text-white">ABOUT COMPONENT</h1> 
    <div className="d-flex justify-content-center align-items-center mb-3">
      <div className="line me-3" ></div>
       <FontAwesomeIcon icon={faStar} className='text-white' />
       <div className="line ms-3" ></div>
      </div>  
    <div className="row gy-0 gx-0 d-flex align-items-center justify-content-center">
      
      
      <div className="col-md-5 ps-3 text-white">
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </div>
            
      <div className="col-md-5 ps-3 text-white">
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </div>
      </div>   




    </div>
  )
}
