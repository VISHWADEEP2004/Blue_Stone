import React from 'react';
import '../../Assets/Css/Destination.css';

const Card = ({ title, copy, button }) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn1">{button}</button>
    </div>
  </div>
);

const Destination = () => {
  const cards = [
    {
      title: 'UK',
      copy: 'Explore the diverse range of educational opportunities in the UK, from world-renowned universities.',
      button: 'Read More',
    },
    {
      title: 'USA',
      copy: 'Discover the extensive variety of academic programs and research opportunities across the USA.',
      button: 'Read More',
    },
    {
      title: 'Canada',
      copy: 'Experience top-quality education and vibrant student life in Canada, known for its iverse environment.',
      button: 'Read More',
    },
    {
      title: 'Australia',
      copy: 'Study in Australia and take advantage of its excellent education system and stunning landscapes.',
      button: 'Read More',
    },
  ];

  return (
    <div className="dest">
      <h1 className="heading">FAVOURITE DESTINATION</h1>
      <p className="subheading">Choose Your Favourite Destination! Country!</p>
      <main className="page-content">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            copy={card.copy}
            button={card.button}
          />
        ))}
      </main>
    </div>
  );
};

export default Destination;
