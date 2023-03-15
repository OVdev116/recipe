import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe, setMealType } from "../../redux/slices/cardsSlice";


function CategoriesRadio({ array, title }: { array: string[], title: string }) {
    const store: any = useSelector(state => state)
    const dispatch = useDispatch();


    return (
        <>
            <div className="categories__title">
                {title}
            </div>
            <div className="">
                {array.map((item: string, index: number) =>

                    <div className="" key={index} >
                        <input type="radio" checked={store.cards.mealType === item} name="mealType" value={item} id={`categoryRadio_${index}`} onChange={(e) => {
                            dispatch(setMealType(e.target.value))
                            dispatch(fetchRecipe())
                        }

                        } />
                        <label htmlFor={`categoryRadio_${index}`}>{item}</label>
                    </div>
                )}
            </div>
        </>
    )
}
export { CategoriesRadio }