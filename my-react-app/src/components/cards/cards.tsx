import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { recipeItem } from '../../types/types';
import { Card } from '../card/card';
import './cards.scss'
function Cards({ cards }: any) {
    return (
        <div className="cards__items">
            {cards.map((item: any, index: number) => {
                let recipe: recipeItem = {
                    name: item.recipe.label.charAt(0).toUpperCase() + item.recipe.label.slice(1).toLowerCase(),
                    calories: parseInt(item.recipe.calories).toLocaleString('ru'),
                    image: item.recipe.image,
                    dishType: item.recipe.dishType,
                    mealType: item.recipe.mealType,
                    ingredientLines: item.recipe.ingredientLines,
                    totalTime: Math.trunc(parseInt(item.recipe.totalTime) / 60)
                }
                return <Card item={recipe} key={index} />
            }
            )}

        </div>
    )
}
export { Cards };
