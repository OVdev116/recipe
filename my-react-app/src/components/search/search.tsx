import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, setSearch } from '../../redux/slices/cardsSlice';
import { debounce } from 'lodash';
import './search.scss';


function Search() {
    const store: any = useSelector(state => state);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleValue = (e: any) => {
        dispatch(setSearch(e.target.value))
    }
    const updateSearchValue = useCallback(debounce((value: string) => {
        dispatch(setSearch(value));
    }, 1000), [])
    return (
        <div className="search__form">
            <input type="text" placeholder="Search" value={value} onChange={e => {
                setValue(e.target.value);
                updateSearchValue(e.target.value);
            }} />
            <button onClick={() => {
                if (value !== '') {
                    setValue('');
                    dispatch(fetchRecipe());
                }

            }}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 14.08C15.9333 14 15.8933 13.9067 15.88 13.8C15.88 13.6933 15.9067 13.5933 15.96 13.5C16.88 12.0733 17.34 10.5067 17.34 8.8C17.34 7.22667 16.9467 5.76667 16.16 4.42C15.3867 3.11333 14.3467 2.07333 13.04 1.3C11.7067 0.513333 10.2533 0.119999 8.68 0.119999C7.10667 0.119999 5.64667 0.513333 4.3 1.3C2.99333 2.07333 1.95333 3.11333 1.18 4.42C0.393333 5.76667 0 7.22667 0 8.8C0 10.3733 0.393333 11.8333 1.18 13.18C1.95333 14.4867 2.99333 15.5267 4.3 16.3C5.64667 17.0867 7.10667 17.48 8.68 17.48C9.58667 17.48 10.4733 17.34 11.34 17.06C12.18 16.78 12.96 16.3867 13.68 15.88C13.76 15.8133 13.8533 15.7867 13.96 15.8C14.08 15.8 14.1733 15.84 14.24 15.92L17.4 19.08C17.4133 19.0933 17.4667 19.14 17.56 19.22L17.74 19.38L18.1 19.76C18.1667 19.8267 18.2533 19.86 18.36 19.86C18.4667 19.86 18.5533 19.8267 18.62 19.76L19.9 18.48C19.9667 18.4133 20 18.3267 20 18.22C20 18.1133 19.9667 18.0267 19.9 17.96L16 14.08ZM13.92 12.84C13.64 13.2133 13.32 13.5533 12.96 13.86C12.3733 14.3667 11.7133 14.76 10.98 15.04C10.2467 15.3067 9.48 15.44 8.68 15.44C7.48 15.44 6.36667 15.14 5.34 14.54C4.32667 13.9533 3.52667 13.1533 2.94 12.14C2.34 11.1133 2.04 10 2.04 8.8C2.04 7.6 2.34 6.48667 2.94 5.46C3.52667 4.44667 4.32667 3.64667 5.34 3.06C6.36667 2.46 7.48 2.16 8.68 2.16C9.88 2.16 10.9933 2.46 12.02 3.06C13.02 3.64667 13.8133 4.44667 14.4 5.46C15 6.48667 15.3 7.6 15.3 8.8C15.3 9.54667 15.18 10.2667 14.94 10.96C14.7 11.64 14.36 12.2667 13.92 12.84Z"
                        fill="black"
                    />
                </svg>
            </button>
        </div>
    );
}
export { Search };
