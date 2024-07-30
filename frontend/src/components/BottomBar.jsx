import React from 'react';
import { BottomBar } from '../pages/home/styles';
import CategoryCard from './CategoryCard';
import Button from 'react-bootstrap/Button';

const BottomBarComponent = ({ categories, productsList, categoryCounters, count, handleComplete }) => (
  <BottomBar>
    <h4>Total: {count}</h4>
    {categories.map((category) => (
      <CategoryCard
        key={category._id}
        category={category}
        productsList={productsList}
        categoryCounters={categoryCounters}
      />
    ))}
    <Button
      style={{ height: '60px', marginRight: '20px', marginLeft: '10px' }}
      onClick={handleComplete}
    >
      Complete Order
    </Button>
  </BottomBar>
);

export default BottomBarComponent;