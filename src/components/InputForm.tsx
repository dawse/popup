import React from 'react';
import './InputForm.css';

interface InputFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ onNext, onPrev }) => {
  return (
    <div className="input-form">
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
      </div>
      <div className="form-group">
        <label htmlFor="input1">Input 1:</label>
        <input type="text" id="input1" name="input1" />
      </div>
      <div className="form-group">
        <label htmlFor="input2">Input 2:</label>
        <input type="text" id="input2" name="input2" />
      </div>
    </div>
  );
};

export default InputForm;
