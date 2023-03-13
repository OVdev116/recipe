
import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { apiID, apiKeys, arrowChekced } from '../../api';
import { cardsState, params } from '../../types/types';
import axios from 'axios';
const initialState: cardsState = {
    cards: [],
    search: 'salad',
    health: 'alcohol-free',
    diet: 'balanced',
    dishType: 'Bread'
}

export const fetchRecipe: any = createAsyncThunk(
    'cards/fetchRecipe',
    async (params, thunkAPI) => {

        try {
            console.log(thunkAPI.getState().cards.search);
            const response = await axios.get(`https://api.edamam.com/search?q=${thunkAPI.getState().cards.search}&app_id=${apiID}&app_key=${apiKeys}&health=${thunkAPI.getState().cards.health}&diet=${thunkAPI.getState().cards.diet}&dishType=${thunkAPI.getState().cards.dishType}`);


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
        setDishType(state, action) {
            state.dishType = action.payload
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

export const { setSearch, setCategory, setDishType, setDiet } = cardsSlice.actions

export default cardsSlice.reducer