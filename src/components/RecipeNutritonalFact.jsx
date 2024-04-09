import React, { Children } from 'react'

const RecipeNutritonalFact = ({fact, children}) => {
    
  return (
    <div className='recipe-fact-container'>
        {children}
        <h3>{fact.amount}</h3>
        <p>{fact.category}</p>
    </div>
  )
}

export default RecipeNutritonalFact