import React, { useState } from 'react';
import './App.css';
import UploadPhotos from './Components/UploadPhotos';
import UploadVideos from './Components/UploadVideos';
import ImageGallery from './ImageGallery';

function App() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Function to handle tab change
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          UploadPhotos
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          UploadVideos
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <>
          <UploadPhotos />
          <ImageGallery />
</>
        )}

        {activeTab === 'tab2' && (
          <UploadVideos />
        )}
      </div>
    </div>
  );
}

export default App;
