import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header'
import MealsMenu from './components/Meals/MealsMenu';
import MealCart from './components/Cart/MealCart';


function App() {
  
  return (
    <Fragment>
      <MealCart/>
      <Header />
      <main className='main'>
        <MealsMenu/>
      </main>
    </Fragment>
  );
}

export default App;
