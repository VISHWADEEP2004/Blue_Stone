import React from 'react';
import '../../Assets/Css/Services.css';
import backgroundImg from '../../Assets/Img/backgroundImg.jpeg'

const Card = ({ icon, title, copy, button }) => (
  <li className="cards_item">
    <div className="card-1">
      <div className="card_icon1"><i className={icon}></i></div>
      <div className="card_content1">
        <h2 className="card_title1">{title}</h2>
        <p className="card_text1">{copy}</p>
        {button && <button className="btn card_btn">{button}</button>}
      </div>
    </div>
  </li>
);

const Services = () => {
  const cards = [
    {
      icon: 'fas fa-user-graduate',
      title: 'Student Counselling',
      copy: 'Bluestone Overseas Consultants offers personalized support for program and institution selection, ensuring students are well-prepared for global academic pursuits. Our experienced counselors provide tailored guidance, empowering students to make informed decisions for a rewarding overseas education.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-globe',
      title: 'Course, Country & University Selection',
      copy: 'Bluestone Overseas Consultants assists students in selecting the optimal course, country, and university based on their academic goals and personal preferences. Our comprehensive approach ensures informed decisions, fostering a rewarding experience in overseas study.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-book',
      title: 'Test Preparation',
      copy: 'Bluestone Overseas Consultants offers specialized test prep courses for exams like PTE, TOEFL, and IELTS, aiding students in achieving success. Through personalized coaching and materials, our experts maximize students\' potential, enhancing prospects for admission to prestigious global universities.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Application & Admission Processing',
      copy: 'Bluestone Overseas Consultants excels in swiftly, accurately, and effectively processing admissions and applications. Leveraging our expertise, we ensure seamless navigation of requirements, significantly enhancing students\' prospects for acceptance into prestigious universities worldwide.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Financial Assistance',
      copy: 'Bluestone Overseas Consultants provides comprehensive financial support, assisting students in securing scholarships and other funding options to lead their studies effectively. With our guidance and support, students confidently manage the financial aspects of studying abroad, ensuring a smooth transition into their academic journey.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-passport',
      title: 'Visa Processing',
      copy: 'Bluestone Overseas Consultants provides expert and efficient support for visa procedures, ensuring meticulous management of every application aspect. We give personalized guidance to navigate complex immigration laws and requirements. Provide valuable advice to empower students pursuing their dreams of studying abroad with confidence.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-home',
      title: 'Accommodation & Travel Assistance',
      copy: 'We offer holistic support beyond finances, aiding students with housing and travel planning. With our assistance, students confidently navigate international education journey, ensuring a seamless transition into their academic pursuits.',
      button: 'Read More',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Part-Time Job Assistance',
      copy: 'Bluestone Overseas Consultants extends dedicated support beyond academics, aiding students in securing part-time employment opportunities. With our assistance, students effectively balance work and studies, enhancing their overall experience studying abroad.',
      button: 'Read More',
    },
  ];

  return (
    <div className="main">
      <img src={backgroundImg} alt="Background" className="background-image" />
      <h1>OUR SERVICES</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            copy={card.copy}
            button={card.button}
          />
        ))}
      </ul>
    </div>
  );
};

export default Services;
