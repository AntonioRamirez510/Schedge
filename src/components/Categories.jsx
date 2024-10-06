import React from 'react';

const categories = [
  { title: 'After School Activities & Tutoring Services', image: '../src/assets/Tutoring-category.png' },
  { title: 'Creative Arts', image: '../src/assets/CreativeArts-category.png' },
  { title: 'Health & Wellness', image: '../src/assets/HealthAndWellness-category.png' },
  { title: 'Vehicle Maintenence', image: '../src/assets/VehicleMaintenence-category.png' },
  // { title: 'Adventures & Tours', image: '../assets/' },
  // { title: 'Animal Services', image: '../assets/cooking.jpg' },
  // { title: 'Networking Events', image: '../assets/cooking.jpg' },
  // { title: 'Wine Tasting', image: '../assets/cooking.jpg' },
  // { title: 'Local Seminars & Classes', image: '../assets/cooking.jpg' },
];

const Discover = () => {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.title} className="category-image" />
          <div className="category-title">{category.title}</div>
        </div>
      ))}
    </div>
  );
};


export default Discover;
