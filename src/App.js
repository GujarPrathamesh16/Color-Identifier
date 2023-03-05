import Color from "./components/Color";
import {useState} from 'react';
function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDark , setIsDark] = useState('true')
  return (
    <Color
      colorValue = {colorValue}
      setColorValue = {setColorValue}
      hexValue = {hexValue}
      setHexValue = {setHexValue} 
      isDark = {isDark}
      setIsDark = {setIsDark}
    />
  );
}

export default App;
