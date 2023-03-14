import React, { useState } from 'react';


function Card({ item }: any) {

    return (
        <div className="card__item">
            <div className="card__item-img">
                <img src={item.image} alt="" />
            </div>
            <div className="card__item-content">
                <div className="card__item-name">
                    {item.name}
                    {item.totalTime > 0 ?
                        <span className="card__item-time">
                            <svg width="16" height="18" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.99997 1L5.99997 0.999999" stroke="#A4C5CF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.49997 5.00012L4.49997 7.00012" stroke="#A4C5CF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.5 11C6.70914 11 8.5 9.20914 8.5 7C8.5 4.79086 6.70914 3 4.5 3C2.29086 3 0.5 4.79086 0.5 7C0.5 9.20914 2.29086 11 4.5 11Z" stroke="#A4C5CF" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {`${item.totalTime} hour`}
                        </span> : ''}
                </div>
                <ul className="card__item-info">
                    <li><span>Calories:</span> {item.calories}</li>
                    <li><span>Dish type:</span> {item.dishType}</li>
                    <li><span>Meal type:</span> {item.mealType}</li>
                </ul>
                <div className="card__item-ingredient">
                    {item.ingredientLines.map((ingredient: string, index: number) =>
                        <li><span className='card__item-index' key={`card_${index}`}>{index + 1}</span> {ingredient}</li>
                    )}
                </div>
            </div>

        </div >

    );
}
export { Card };
