import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  document.title='Contact';

  return (
    <div className="text-center mt-4">
      <h2>conatct section</h2>
    <div className="d-flex justify-content-center align-items-center">
      <div className="line me-3 bg-black" ></div>
       <FontAwesomeIcon icon={faStar} className='text-black' />
       <div className="line ms-3 bg-black" ></div>
    </div>
    <form action="" className=" mx-auto">
      <input type="text" className="w-50 mb-3 mt-5 d-block mx-auto p-2 "  placeholder="username"/>
            <input type="text" className="w-50 mb-3 mt-5 d-block mx-auto p-2 " placeholder="userage" />
      <input type="email" className="w-50 mb-3 mt-5 d-block mx-auto p-2" placeholder="useremail"  />
      <input type="password" className="w-50 mb-3 mt-5  d-block mx-auto p-2"placeholder="userpassword"/>
      <input type="submit" className="btn btn-outline-success mb-3" value={'send message'}/>
    </form>
    </div>
  )
}
document.title='Contact';
