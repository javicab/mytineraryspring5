import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../css/index.css';
import LandingPage from './LandingPage';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter >
          <div>
            <LandingPage />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
