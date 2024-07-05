import { useContext } from 'react';
import { EmotionProvider, EmotionContext } from '../context/EmotionContext';
import { MainContenHappy } from "../components/Happy/MainContenHappy";
import { MainContentSad } from "../components/Sad/MainContentSad";

export const Home = () => {

  const { emotion } = useContext(EmotionContext);

  return (
    <div>
        {emotion === 'happy' ? <MainContenHappy /> : <MainContentSad />}
    </div>
  )
}
