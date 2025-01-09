import avatar from '../../assets/avataaars (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  document.title='Home';

  return (
    <div className="home d-flex justify-content-center align-items-center flex-column bg-hero-pattern">
      <img src={avatar} alt="" className='mb-3' />
      <h1 className="mb-5 text-uppercase text-white">start Framework</h1>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className="line me-3"></div>
        <FontAwesomeIcon icon={faStar} className='text-white' />
        <div className="line ms-3"></div>
      </div>
      <p className="text-red-700">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
document.title='Home';