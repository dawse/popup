import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faBicycle, faBook, faCar, faCat, faDog, faFish, faLeaf, faMusic, faPlane, faRobot, faShoppingCart, faSnowflake, faTree, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import './MainContent.css';

const categories = [
  { name: 'Coffee', icon: faCoffee },
  { name: 'Apple', icon: faAppleAlt },
  { name: 'Bicycle', icon: faBicycle },
  { name: 'Book', icon: faBook },
  { name: 'Car', icon: faCar },
  { name: 'Cat', icon: faCat },
  { name: 'Dog', icon: faDog },
  { name: 'Fish', icon: faFish },
  { name: 'Leaf', icon: faLeaf },
  { name: 'Music', icon: faMusic },
  { name: 'Plane', icon: faPlane },
  { name: 'Robot', icon: faRobot },
  { name: 'Shopping', icon: faShoppingCart },
  { name: 'Snowflake', icon: faSnowflake },
  { name: 'Tree', icon: faTree },
  { name: 'Umbrella', icon: faUmbrella },
];

const MainContent: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories.map(category => category.name));

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.name} className={`category-item ${selectedCategories.includes(category.name) ? 'enabled' : 'disabled'}`}>
          <input
            type="checkbox"
            id={category.name}
            name={category.name}
            value={category.name}
            checked={selectedCategories.includes(category.name)}
            onChange={() => handleCategoryChange(category.name)}
          />
          <label htmlFor={category.name}>
            <FontAwesomeIcon icon={category.icon} className="category-icon" />
            <span>{category.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
