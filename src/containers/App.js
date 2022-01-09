import React, { useState } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import SearchMeal from '../components/Calendar/SearchMeal';

//Data and functions
import { randomMealIndices } from '../functions/randomMealIndices';
import { mealOptions } from '../data/mealOptions';

//Styles
import '../styles/App.scss';


function App() {
  
  //State management - useState hooks
  
  const [mealIds, setMealIds] = useState([]);

  const [unusedMealIds, setUnusedMealIds] = useState(() => {
      return mealOptions.map((meal, i) => i);
  });

  const [searchMeals, setSearchMeals] = useState('');

  const selectMeals = () => {
    const [ calendarIndices, unusedIndices ] = randomMealIndices(mealOptions);
    setMealIds(calendarIndices);
    setUnusedMealIds(unusedIndices);
  }

  return (
    <main className='container'>
      <PickMeals 
          selectMeals={selectMeals}
      />
      <SearchMeal 
          searchMeals={searchMeals}
          setSearchMeals={setSearchMeals}
      />
      <WeekCalendar 
        mealIds={mealIds}
        unusedMealIds={unusedMealIds}
        mealOptions={mealOptions}
        searchMeals={searchMeals}
        />
    </main>
  );
}

export default App;
