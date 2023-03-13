import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { Cards } from './components/cards/cards';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import { Sidebar } from './components/sidebar/sidebar';
import { fetchRecipe } from './redux/slices/cardsSlice';
function App() {
  const store: any = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchRecipe());
    } catch (error) {
      console.log(error);
    }

  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <div className="content">
        <div className="container-fluid">
          <div className="content-inner">
            <Sidebar />
            <Cards cards={store.cards.cards} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
