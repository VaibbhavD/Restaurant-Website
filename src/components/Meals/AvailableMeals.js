import Card from '../UI/Card'
import classes from './Available.module.css'
import Mealitems from './Mealitems/Mealitems'

const Dummy_meals=[
    {
        id: 'm1',
        name: 'Cheeze Burger',
        description: 'Fresh Burger with full loaded Cheeze',
        price:150,
      },
      {
        id: 'm2',
        name: 'Rolls',
        description: 'Chicken Roll',
        price: 99,
      },
      {
        id: 'm3',
        name: 'Panner cheeze Pizza',
        description: 'Full loaded Panner and Cheeze Pizza',
        price:300,
      },
      {
        id: 'm5',
        name: 'Chiken Bucket',
        description: '6 Pic Leg-Piece',
        price:499,
      },
      {
        id: 'm4',
        name: 'Coke',
        description: '200ML Pepsi Coke',
        price:25,
      },
]

const AvailableMeals=()=>{
    // const MealList=Dummy_meals.map((meal)=><Mealitems key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

    return(
        <section className={classes.meals}>
          <Card>
            <ul >{Dummy_meals.map((meal=>(
              <Mealitems 
              key={meal.id} 
              id={meal.id} 
              name={meal.name}
              description={meal.description}
              price={meal.price} />
            )))}</ul>
          </Card>
        </section>
    )
}
export default AvailableMeals