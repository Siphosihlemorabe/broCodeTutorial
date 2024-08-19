import React from 'react';

function List(props) {
  const fruits = [
    { id: 1, name: 'banana', calories: 105 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'apple', calories: 95 },
    { id: 4, name: 'pineapple', calories: 37 },
  ];

  // Filter fruits with calories less than 90
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 90);

  // Map over the filtered fruits to create list items
  const listItems = lowCalFruits.map(fruit => (
    <li key={fruit.id}>{fruit.name} - {fruit.calories} calories</li>
  ));

  return (
    <ol>{listItems}</ol>
  );
}

export default List;
