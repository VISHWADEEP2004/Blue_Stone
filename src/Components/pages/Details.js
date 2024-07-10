
import React from 'react';
import '../../Assets/Css/Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBook, faPassport } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  return (
    <div className="cards-container1">
      <div className="card-d">
        <div className="icon-container">
          <FontAwesomeIcon icon={faPlane} className="card-icon" />
        </div>
        <h2>Study Abroad</h2>
        <p>Discover opportunities for international education with our customized study abroad packages. Broaden your horizons, acquire useful skills, and immerse yourself in various cultures. Begin your path of transformation right now.</p>
        <button>View More Program</button>
      </div>

      <div className="card-d">
        <div className="icon-container">
          <FontAwesomeIcon icon={faBook} className="card-icon" />
        </div>
        <h2>Test Preparation</h2>
        <p>IELTS, PTE, and TOEFL customized test preparation. With the help of our all-inclusive exam preparation services, reach your language objectives. Personalized tactics and knowledgeable direction to guarantee your achievement.</p>
        <button>View More Services</button>
      </div>

      <div className="card-d">
        <div className="icon-container">
          <FontAwesomeIcon icon={faPassport} className="card-icon" />
        </div>
        <h2>Visa & Flight Ticket Booking</h2>
        <p>Help with visas and airline ticket booking services. Make your trip easier with our knowledgeable assistance. You may rely on us to take care of every aspect, including booking flights and obtaining visas. Count on us for individualized guidance.</p>
        <button>Visa Enquiry</button>
      </div>
    </div>
  );
}

export default Details;
