import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header'
import MealsMenu from './components/Meals/MealsMenu';


function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <MealsMenu/>
      </main>
    </Fragment>
  );
}

export default App;
