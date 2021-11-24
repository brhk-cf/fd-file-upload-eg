import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './components/upload';
import WithPreviews from './components/uploadWithPreview';
import Uploads from './components/Uploads';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Upload files effortlessly</h1>
      </header>
      <div className='container'>
        {/* <FileUpload /> */}
        <WithPreviews />
        <Uploads />
      </div>
    </div>
  );
}

export default App;
