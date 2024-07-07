import React, { useState } from 'react';
import Popup from './components/Popup';

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
};

export default App;
