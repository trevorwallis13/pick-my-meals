import React, { useState, useEffect } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import SearchMeal from '../components/Calendar/SearchMeal';
import UnusedMeals from '../components/Calendar/UnusedMeals';

//Data and functions
import { randomMeals } from '../functions/randomMealIndices';
import { mealOptions } from '../data/mealOptions';

//Styles
import '../styles/App.scss';


function App() {
  
  //State management - useState hooks

  const [meals, setMeals] = useState(
    JSON.parse(localStorage.getItem("meals")) || mealOptions
  );
  
  const [calendarMeals, setCalendarMeals] = useState(
    JSON.parse(localStorage.getItem("calendarMeals")) || []
  );

  const [unusedMeals, setUnusedMeals] = useState(
    JSON.parse(localStorage.getItem("unusedMeals")) || meals);

  const [searchMeals, setSearchMeals] = useState('');

  // State management - Update state functions

  const selectMeals = () => {
    const [ mealsForWeek, remainingMeals ] = randomMeals(meals);
    setCalendarMeals(mealsForWeek);
    setUnusedMeals(remainingMeals);
  }

  // State management - useEffect on load
   

  // State management - useEffect on change

  useEffect(() => {
    localStorage.setItem("calendarMeals", JSON.stringify(calendarMeals));
  }, [calendarMeals]);

  useEffect(() =>{
    localStorage.setItem("unusedMeals", JSON.stringify(unusedMeals));
  }, [unusedMeals]);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  return (
    <main className='container'>
      <PickMeals 
          selectMeals={selectMeals}
          meals={meals}
          setMeals={setMeals}
          setUnusedMeals={setUnusedMeals}
      />
      <UnusedMeals 
          unusedMeals={unusedMeals} 
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
