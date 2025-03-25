//import components
import ButtonList from './ButtonList';
import Card from './Card';

//import datas
import languages from '../data/languages';

//export component Main
export default function Main() {

  //logic here

  //return here
  return (

    <div className="container">
      <ButtonList></ButtonList>
      <Card props={languages}></Card>
    </div>
  );
}