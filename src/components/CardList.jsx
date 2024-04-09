import React from 'react'
import Card from "./Card"

// export  const recipes = [
//     {
//         id:1,
//         name:"Poke Bowls",
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3KusdrS9TsAQ_Dc4MCoqnM2o2WWe1UTbu9ILgje1CA&s",
//         tag:"Romantic Dinner",
//         numberOfMinutes:50
//     },
//     {
//         id:2,
//         name:"Spageti",
//         image : "https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg",
//         tag:"Healthy Dinner",
//         numberOfMinutes:30
//     },
//     {
//         id:3,
//         name:"Poke Bowls",
//         image : "https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg",
//         tag:"Romantic Dinner",
//         numberOfMinutes:50
//     },
//     {
//         id:4,
//         name:"Poke Bowls",
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLmYsgguIfEq-3y8y6FfjjSUnEF6OlB4_2pL5yuo23A&s",
//         tag:"Romantic Dinner",
//         numberOfMinutes:50
//     },
// ] 

const CardList = ({recipes}) => {

  return (
    <section className='cards'>
        {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe}/>  
        ))}
      </section>
  )
}

export default CardList