import React, { useState, useEffect } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import SearchMeal from '../components/Calendar/SearchMeal';

//Data and functions
import { randomMeals } from '../functions/randomMealIndices';
import { mealOptions } from '../data/mealOptions';

//Styles
import '../styles/App.scss';


function App() {
  
  //State management - useState hooks

  const [meals, setMeals] = useState(mealOptions);
  
  const [calendarMeals, setCalendarMeals] = useState([]);

  const [unusedMeals, setUnusedMeals] = useState(meals);

  const [searchMeals, setSearchMeals] = useState('');

  // State management - Update state functions

  const selectMeals = () => {
    const [ mealsForWeek, remainingMeals ] = randomMeals(meals);
    setCalendarMeals(mealsForWeek);
    setUnusedMeals(remainingMeals);
  }

  // State management - useEffect hooks
   

  return (
    <main className='container'>
      <PickMeals 
          selectMeals={selectMeals}
          meals={meals}
          setMeals={setMeals}
          setUnusedMeals={setUnusedMeals}
      />
      <SearchMeal 
          searchMeals={searchMeals}
          setSearchMeals={setSearchMeals}
      />
      <WeekCalendar 
        calendarMeals={calendarMeals}
        unusedMeals={unusedMeals}
        searchMeals={searchMeals}
        />
    </main>
  );
}

export default App;
