import React, { Fragment } from "react"
import MealsSummury from "./MealsSummury"
import AvailableMeals from "./AvailableMeals"

const MealsMenu=props=>{
    

    return(
     <Fragment>
     <MealsSummury/>
     <AvailableMeals/>
     </Fragment>  
    )

}
export default MealsMenu