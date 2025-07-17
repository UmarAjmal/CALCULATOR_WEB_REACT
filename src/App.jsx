// import styles from './App.module.css'
import Header from './header_components/Header'
import Input from './input_components/Input'
import ButtonsContainer from './buttons_components/Buttons_container'
import { useState } from 'react'

function App() {

  let [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) =>{

    if (buttonText === 'C')
    {
      setcalVal("");
    }
    else if (buttonText === '=')
    {
      const result  = eval(calVal);
      setcalVal(result);
    } 
    else{
      let newcalval = calVal + buttonText;
      setcalVal(newcalval)
    }
    
  }

  return (
    <Header >
      <Input calVal = {calVal}/>
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
     </Header>
  )
}

export default App
