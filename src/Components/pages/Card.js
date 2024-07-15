import React, {useState}from 'react';
import '../../Assets/Css/Card.css'; // Adjust the import path as needed

const Card = ({ icon, title, copy, button, image, alt }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="custom-cards_item">
      <div className="custom-card">
        <div className="custom-card_icon"><i className={icon}></i></div>
        <div className="custom-card_content">
          <h2 className="custom-card_title">{title}</h2>
          <p className="custom-card_text">{copy}</p>
          {button && (
            <button className="btn custom-card_btn" onClick={toggleDetails}>
              {showDetails ? 'Show Less' : 'Read More'}
            </button>
          )}
          {showDetails && (
            <div className="custom-card_details">
              <img src={image} alt={alt} className="custom-card_image" />
              <p className="custom-card_text">{copy}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
