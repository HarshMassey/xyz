import React, { useState } from 'react';
import { Provider } from 'react-redux'; // Import Provider for Redux
import store from './store'; // Adjust the import path as necessary
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}> {/* Wrap your app with the Redux Provider */}
      <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Verdantia Gardens</h1>
              <div className="divider"></div>
              <p>Growing Life, One Leaf at a Time</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
