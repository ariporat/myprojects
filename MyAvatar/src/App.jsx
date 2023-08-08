
import './App.css'
import { useState } from 'react';
import Avatar from './Avatar/Avatar';

function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const handleImageChange = () => {
    setCurrentImageUrl(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h2>Hello World</h2>
      
     
      <button onClick={handleImageChange}>Change Picture</button><br/>
      <label>Picture URL:</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      <Avatar url={currentImageUrl} />
    </>
  );
}
export default App;