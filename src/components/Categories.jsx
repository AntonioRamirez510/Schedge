import React from 'react';

const categories = [
  { title: 'After School Activities', image: '../src/assets/categories/AfterSchoolandTutoring.png' },
  { title: 'Creative Arts', image: '../src/assets/categories/CreativeArts.png' },
  { title: 'Health & Wellness', image: '../src/assets/categories/HealthandWellness.png' },
  { title: 'Vehicle Maintenence', image: '../src/assets/categories/vehicleMaintenence.png' }
];

const Discover = () => {
  return (
    <div className="browse-by-category">
      <h1 className="browse">BROWSE BY CATEGORIES</h1>
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.title} className="category-image" />
          <div className="category-title">{category.title}</div>
        </div>
      ))}
    </div>
    <div className="browse-by-category">
      <h1 className="browse">BROWSE BY DEALS</h1>
    </div>
    </div>
  );
};


export default Discover;
