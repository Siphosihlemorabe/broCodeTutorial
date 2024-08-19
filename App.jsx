import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import Button from './button.jsx';
import List from './List.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import Counter from './Counter.jsx';
import MyComponent from './MyComponent.jsx';
import UseState from './UseState.jsx';
import Colorpicker from './Colorpicker.jsx'
import './index.css'
function App() {
  return (
    <div>
      {/* Uncomment the main tag if needed */}
      {/* <main> */}
        
         {/* Corrected component usage */}
         {/* <UseState></UseState> */}
         <Colorpicker></Colorpicker>
        
      {/* Uncomment Counter if needed */}
      {/* <Counter /> */}
      {/* </main> */}
      
      {/* Uncomment Footer if needed */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
