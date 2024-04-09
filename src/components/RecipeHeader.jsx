import React from 'react'
import RecipeNutritonalFact from './RecipeNutritonalFact'
import {AiOutlineFire} from 'react-icons/ai'
import {CiWheat} from 'react-icons/ci'
import {BiCheese, BiCake} from "react-icons/bi"
import {IoFishOutline} from "react-icons/io5"

const RecipeHeader = ({nutritionalFacts, name}) => {

    const nutritionalFactsArray = [
        {
        id:1,
        amount:nutritionalFacts.calories,
        category:"calories",
        Icon:AiOutlineFire
      },
      {
        id:2,
        amount:nutritionalFacts.carbohydrates,
        category:"carbs",
        Icon:CiWheat
      },
      {
        id:3,
        amount:nutritionalFacts.fat,
        category:"fats",
        Icon:BiCheese
      },
      {
        id:4,
        amount:nutritionalFacts.protein,
        category:"protein" ,
        Icon:IoFishOutline
      },
      {
        id:5,
        amount:nutritionalFacts.sugar,
        category:"sugar ",
        Icon:BiCake
      }
    ]
  return (
    <div className='recipe-header'>
        <h1>{name}</h1>
        <div className='nutritional-facts-container'>
        {nutritionalFactsArray.map(({Icon, id, amount, category}) => (

            <RecipeNutritonalFact fact={{ amount, category }} key={id}>
                <Icon/>
            </RecipeNutritonalFact>
        ))}
        </div>
    </div>
  )
}

export default RecipeHeader