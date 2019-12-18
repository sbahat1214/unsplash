import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCover from './components/MainCover/MainCover';
// import OnAppMountRun from './components/onAppMount/onAppMount';


function App() {
  return (
    <div className="App">
     <Nav />
     <MainCover  />
      {/* <OnAppMountRun / > */}
    </div>
  );
}

export default App;
