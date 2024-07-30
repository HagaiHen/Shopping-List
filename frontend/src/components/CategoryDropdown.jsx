import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CategoryDropdown = ({ currentCategory, categories, setCurrentCategory }) => (
  <DropdownButton id="dropdown-basic-button" title={currentCategory.title}>
    {categories.map((category) => (
      <Dropdown.Item key={category._id} onClick={() => setCurrentCategory(category)}>
        {category.title}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default CategoryDropdown;