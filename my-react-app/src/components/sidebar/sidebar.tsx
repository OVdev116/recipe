import React from "react";
import './sidebar.scss'
import { dietLabels, dishType, healthLabels } from "../../api";
import { Categories } from "../categories/categories";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <Categories arrayLabel={healthLabels} title="Allergies" nameRequest='health' />
                <Categories arrayLabel={dietLabels} title="Diets" nameRequest='diets' />
                <Categories arrayLabel={dishType} title="Dish type" nameRequest='dishType' />
            </div>
        </div>
    )
}
export { Sidebar }