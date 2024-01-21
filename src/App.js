import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header'
import MealsMenu from './components/Meals/MealsMenu';
import MealCart from './components/Cart/MealCart';


function App() {
  const [show,setshow]=useState(false)

  const enableCart=()=>{
    setshow(true)
  }
  const DisebleCart=()=>{
    setshow(false)
  }

  return (
    <Fragment>
      {show && <MealCart DisebleCart={DisebleCart}/>}
      <Header enableCart={enableCart}/>
      <main className='main'>
        <MealsMenu />
      </main>
    </Fragment>
  );
}

export default App;
