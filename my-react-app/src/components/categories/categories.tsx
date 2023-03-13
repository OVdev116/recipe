import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrowChekced } from "../../api";
import { fetchRecipe, setCategory, setHealthLabel } from "../../redux/slices/cardsSlice";


import './categories.scss'
function Categories({ arrayLabel, title, nameRequest }) {
    const [value, useValue] = useState('');
    const store: any = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <>
            <div className="categories__title">
                {title}
            </div>
            <select className="categories__items" onChange={(e) => {
                dispatch(setCategory(e.target.value))
                dispatch(fetchRecipe({ search: store.cards.search, category: store.cards.health }))
            }}>
                {arrayLabel.map((item: string, index: number) =>
                    <option value={item} className="category__item" key={index}>{item}</option>
                )}
            </select>
        </>)
}
export { Categories }