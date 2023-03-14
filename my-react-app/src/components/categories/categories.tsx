import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe, setCategory, setDiet } from "../../redux/slices/cardsSlice";


import './categories.scss'
function Categories({ arrayLabel, title, nameRequest }: { arrayLabel: string[], title: string, nameRequest: string }) {
    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <>
            <div className="categories__title">
                {title}
            </div>
            <select className="categories__items" onChange={(e) => {
                if (nameRequest === 'health') {
                    dispatch(setCategory(e.target.value))
                } else if (nameRequest === 'diets') {
                    dispatch(setDiet(e.target.value))
                }

                dispatch(fetchRecipe())
            }}>
                {arrayLabel.map((item: string, index: number) =>
                    <option value={item} className="category__item" key={index}>{item}</option>
                )}
            </select>
        </>)
}
export { Categories }