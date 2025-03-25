//import react useState
import { useState } from 'react';

//import components
import ButtonList from './ButtonList';
import Card from './Card';

//import datas
import languages from '../data/languages';

//export component Main
export default function Main() {

  //logic here
  const [activeIndex, setActiveIndex] = useState(1);

  //return here
  return (

    <div className="container">
      <ButtonList active={activeIndex} setActive={setActiveIndex} array={languages}></ButtonList>
      <Card active={activeIndex} array={languages}></Card>
    </div>
  );
}