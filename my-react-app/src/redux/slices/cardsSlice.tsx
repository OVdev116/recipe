
import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { apiID, apiKeys } from '../../api';
import { cardsState } from '../../types/types';
import axios from 'axios';

const initialState: cardsState = {
    cards: [],
    search: 'salad',
    health: 'alcohol-free',
    diet: 'balanced',
    mealType: 'Lunch'
}

export const fetchRecipe: any = createAsyncThunk<
    string,
    string,
    { state: any }
>(
    'cards/fetchRecipe',
    async (_, { rejectWithValue, getState }) => {
        const params = {
            search: getState().cards.search,
            health: getState().cards.health,
            diet: getState().cards.diet,
            mealType: getState().cards.mealType,
        }
        try {
            const response = await axios.get(`https://api.edamam.com/search?q=${params.search}&app_id=${apiID}&app_key=${apiKeys}&health=${params.health}&diet=${params.diet}&mealType=${params.mealType}`);
            return response.data.hits;
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        },
        setCategory(state, action) {
            state.health = action.payload
        },
        setDiet(state, action) {
            state.diet = action.payload
        },
        setMealType(state, action) {
            state.mealType = action.payload
        }
    },
    extraReducers: {
        [fetchRecipe.pending]: (state, action) => {
            console.log('отправка');
        },
        [fetchRecipe.fulfilled]: (state, action) => {
            state.cards = action.payload;
        },
        [fetchRecipe.rejected]: (state, action) => {
            console.log(Error);
        },
    },
})

export const { setSearch, setCategory, setMealType, setDiet } = cardsSlice.actions

export default cardsSlice.reducer