import React, { useState } from 'react';
import '../styles/App.css';
import WeekCalendar from '../components/WeekCalendar';
import { mealOptions } from '../data/mealOptions';

function App() {

  const [mealIds, setMealIds] = useState([]);

  const randomMealIndices = () => {
    let indices = [];
    let randomizedIndices = [];

    for (let i = 0; i<mealOptions.length; i++) indices.push(i);

    while(randomizedIndices.length < 7) {
        const randIdx = indices.splice(Math.floor(Math.random() * indices.length), 1);
        randomizedIndices.push(randIdx); 
    }

    return randomizedIndices
}

  const selectMeals = () => {
      const randMealIndices = randomMealIndices();
      setMealIds(randomMealIndices);
  }



  return (
    <div>
      <h1>What do you want for dinner this week?</h1>
      <button onClick={selectMeals}>Pick my meals!</button>
      <WeekCalendar mealIds={mealIds}/>
    </div>
  );
}

export default App;
