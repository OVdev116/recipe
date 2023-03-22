import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './form-input.scss';
import { debounce } from 'lodash';
import { fetchRecipe, setInputValue } from "../../redux/slices/cardsSlice";
function FormInput({ title, text }: { title: string, text: string }) {
    const [value, setValue] = useState('')
    const store: any = useSelector(state => state);
    const dispatch = useDispatch();
    const formInputValue = useCallback(debounce((value) => {
        console.log(value);

        dispatch(setInputValue(value));
        dispatch(fetchRecipe());
    }, 1000), [])
    return (
        <div className="form-input">
            <div className="categories__title">
                {title}

            </div>
            <div className="form-input_text" >{text}</div>
            <input type="number" placeholder="enter the number" onChange={(e) => {
                if (e.target.value !== '') {
                    formInputValue(e.target.value)
                }


            }} /> <span>kkal</span>
        </div>
    )
}
export { FormInput }