import React from "react";
import './sidebar.scss'
import { dietLabels, healthLabels, mealType } from "../../api";
import { Categories } from "../categories/categories";
import { CategoriesRadio } from "../categoriesRadio/categoriesRadio";
function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <Categories arrayLabel={healthLabels} title="Allergies" nameRequest='health' />
                <Categories arrayLabel={dietLabels} title="Diets" nameRequest='diets' />
                <CategoriesRadio array={mealType} title="Dish type" />
            </div>
        </div>
    )
}
export { Sidebar }