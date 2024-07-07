import React, { useState } from 'react';
import './Popup.css';
import MainContent from './MainContent';
import InputForm from './InputForm';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <div className="popup-main-content">
          {step === 0 && <MainContent />}
          {step === 1 && <InputForm onNext={handleNext} onPrev={handlePrev} />}
        </div>
        <div className="popup-buttons-content">
          {step === 0 && <button onClick={handleNext} className="next-button">Next</button>}
          {step === 1 && (
            <>
              <button onClick={handlePrev} className="prev-button">Prev</button>
              <button onClick={onClose} className="confirm-button">Confirm</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
