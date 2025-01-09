import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer p-3 text-white">
      <div className="row m-auto gy-3 d-flex justify-content-center">
        <div className="col-md-3 text-center ">
          <div>
            <h2 className="fs-5">LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65244</span>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div>
            <h2 className="fs-5">AROUND THE WEB</h2>
            <div className="d-flex justify-content-center aign-align-items-center mt-3">
              <FontAwesomeIcon icon={faFacebook} className='me-2 fs-4' />
              <FontAwesomeIcon icon={faTwitter} className='me-2 fs-4'  />
              <FontAwesomeIcon icon={faLinkedin}className='me-2 fs-4' />
              <FontAwesomeIcon icon={faInstagram}className='me-2 fs-4'/>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div>
            <h2 className="fs-5">ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="footer2 w-100 text-center d-flex align-items-center justify-content-center mt-4">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );align-items-center
}