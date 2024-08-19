import React, { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('guest');
  const [age, setAge] = useState(0); // Corrected syntax: removed extra parentheses

  const incrementAge = () => { // Arrow function syntax is correct here
    setAge(age + 1);
  }

  const updateName = () => {
    setName('Spongebob');
  }

  return (
    <div>
      <p>Name is {name}</p> {/* Added space for readability */}
      <p>Age is {age}</p> {/* Added space for readability */}
      <button onClick={incrementAge}>Increment Age</button> {/* Added button to trigger incrementAge */}
      <button onClick={updateName}>Update Name</button> {/* Added button to trigger updateName */}
    </div>
  );
}

export default MyComponent;
