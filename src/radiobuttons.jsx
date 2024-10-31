import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('radioButtons');

  const RadioButtonGroup = () => {
    const [group1, setGroup1] = useState('');
    const [group2, setGroup2] = useState('');
    const [group3, setGroup3] = useState('');

    const handleGroup1Change = (event) => setGroup1(event.target.value);
    const handleGroup2Change = (event) => setGroup2(event.target.value);
    const handleGroup3Change = (event) => setGroup3(event.target.value);

    const getDisplayContent = () => {
      return group1 + group2 + group3;
    };

    return (
      <div>
        <div>
          <h3>グループ1:</h3>
          <label>
            <input
              type="radio"
              value="option1"
              checked={group1 === 'option1'}
              onChange={handleGroup1Change}
            />
            オプション 1
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={group1 === 'option2'}
              onChange={handleGroup1Change}
            />
            オプション 2
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={group1 === 'option3'}
              onChange={handleGroup1Change}
            />
            オプション 3
          </label>
        </div>
        <div>
          <h3>グループ2:</h3>
          <label>
            <input
              type="radio"
              value="option4"
              checked={group2 === 'option4'}
              onChange={handleGroup2Change}
            />
            オプション 4
          </label>
          <label>
            <input
              type="radio"
              value="option5"
              checked={group2 === 'option5'}
              onChange={handleGroup2Change}
            />
            オプション 5
          </label>
          <label>
            <input
              type="radio"
              value="option6"
              checked={group2 === 'option6'}
              onChange={handleGroup2Change}
            />
            オプション 6
          </label>
        </div>
        <div>
          <h3>グループ3:</h3>
          <label>
            <input
              type="radio"
              value="option7"
              checked={group3 === 'option7'}
              onChange={handleGroup3Change}
            />
            オプション 7
          </label>
          <label>
            <input
              type="radio"
              value="option8"
              checked={group3 === 'option8'}
              onChange={handleGroup3Change}
            />
            オプション 8
          </label>
          <label>
            <input
              type="radio"
              value="option9"
              checked={group3 === 'option9'}
              onChange={handleGroup3Change}
            />
            オプション 9
          </label>
        </div>
        <p>選択された値：{getDisplayContent()}</p>
      </div>
    );
  };
  createRoot(rootElement).render(<RadioButtonGroup />);
});