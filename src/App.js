import './App.css';
import {AllRoutes} from "./routes/AllRoutes";
import { HeaderHappy } from './components/Happy/HeaderHappy';
import { HeaderSad } from './components/Sad/HeaderSad';
import { FooterSad } from './components/Sad/FooterSad';
import { FooterHappy } from './components/Happy/FooterHappy';
import { useContext } from 'react';
import { EmotionContext } from './context/EmotionContext';

function App() {

  const { emotion } = useContext(EmotionContext);

  return (
    <div className="App">
      {emotion === 'happy' ? <HeaderHappy /> : <HeaderSad />}
      <AllRoutes/>
      {emotion === 'happy' ? <FooterHappy /> : <FooterSad />}
    </div>
  );
}

export default App;
