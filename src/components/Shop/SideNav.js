import React from 'react';

const Sidebar = ({ categories, onCategorySelect }) => {
    return (
      <nav id="sidebar">
        <div className="container">
          <select className="form-select" onChange={(e) => onCategorySelect(categories.find(c => c.id === parseInt(e.target.value, 10)))}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    );
  };

export default Sidebar;
