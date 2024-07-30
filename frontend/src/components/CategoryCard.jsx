import React from 'react';
import { Card, CategoryButton, ProductButton } from '../pages/home/styles';

const CategoryCard = ({ category, productsList, categoryCounters }) => (
  <Card>
    <CategoryButton>
      {category.title} (
      {categoryCounters[category.title] || 0})
    </CategoryButton>
    {productsList
      .filter((product) => product.category === category.title)
      .map((product) => (
        <ProductButton key={product.title}>
          {product.title} ({product.quantity})
        </ProductButton>
      ))}
  </Card>
);

export default CategoryCard;