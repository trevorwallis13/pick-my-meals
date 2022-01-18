import React, { useState, useEffect } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import UnusedMeals from '../components/Calendar/UnusedMeals';

//Data and functions
import { randomMeals } from '../functions/randomMealIndices';
import { mealOptions } from '../data/mealOptions';
import { DragDropContext } from 'react-beautiful-dnd';

//Styles
import '../styles/App.scss';

//Misc

const weekdays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

function App() {
  
  //State management - useState hooks

  const [meals, setMeals] = useState(
    JSON.parse(localStorage.getItem("meals")) || mealOptions
  );
  
  const [calendarMeals, setCalendarMeals] = useState(
    JSON.parse(localStorage.getItem("calendarMeals")) || ['','','','','','','']);

  const [unusedMeals, setUnusedMeals] = useState(
    JSON.parse(localStorage.getItem("unusedMeals")) || meals);

  const [searchMeals, setSearchMeals] = useState('');

  // State management - Update state functions

  // const selectMeals = () => {
  //   const [ mealsForWeek, remainingMeals ] = randomMeals(meals);
  //   setCalendarMeals(mealsForWeek);
  //   setUnusedMeals(remainingMeals);
  // }

  const selectMeals = () => {
    const emptyDays = getEmptyDays();
    let newUnusedMealsList = Array.from(unusedMeals);
    let newCalMealsList = Array.from(calendarMeals);

    console.log(emptyDays);

    for(let i = 0; i<emptyDays.length; i++) {
      const randIdx = Math.floor(Math.random() * newUnusedMealsList.length);
      const newMeal = newUnusedMealsList.splice(randIdx, 1);


      newCalMealsList.splice(emptyDays[i], 1, ...newMeal);
    }

    setCalAndUnused(newCalMealsList, newUnusedMealsList);

  }

  const setCalAndUnused = (calList, unusedList) => {
    setCalendarMeals(calList);
    setUnusedMeals(unusedList);
  }

  const isCalListFull = () => {

    let isFull = true;
  
    for(let i = 0; i<calendarMeals.length; i++) {
      if(!calendarMeals[i].length) {
        return isFull = false;
      }
    }
    return isFull
  }

  const getEmptyDays = () => {
    let emptyIndices = [];

    for(let i = 0; i<7; i++) {
      if(!Object.keys(calendarMeals[i]).length) {
        emptyIndices.push(i);
      }
    }
    return emptyIndices
  }

  const onDragEnd = result => {

    const { destination, source } = result;
    
    let unusedList = Array.from(unusedMeals);
    let calList = Array.from(calendarMeals);

    const movedItemUnused = () => unusedList.splice(source.index, 1);

    let destIdx = weekdays.indexOf(destination.droppableId);
    let sourceIdx = weekdays.indexOf(source.droppableId);
    
    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (destination.droppableId === "unused-meals" && source.droppableId === "unused-meals") {
      unusedList.splice(destination.index, 0, ...movedItemUnused());
      return setUnusedMeals(unusedList);
    }

    if (source.droppableId === "unused-meals") {
      let removedCalItem = calList.splice(destIdx, 1, ...movedItemUnused());
      if(Object.keys(...removedCalItem).length) {unusedList.splice(0, 0, ...removedCalItem)}
      return setCalAndUnused(calList, unusedList);
    }

    if(source.droppableId !== 'unused-meals' && destination.droppableId !== 'unused-meals') {
      if(calList[destIdx]) {

        let movedItem = calList.splice(sourceIdx, 1);
        calList.splice(destIdx, 0, ...movedItem);

      } else {

        let movedItem = calList.splice(sourceIdx, 1, "");
        calList.splice(destIdx, 1, ...movedItem);
      }
      
      return setCalendarMeals(calList);

    }

    if(source.droppableId !== 'unused-meals') {
      let movedItem = calList.splice(sourceIdx, 1, "");
      unusedList.splice(destination.index, 0, ...movedItem);
      return setCalAndUnused(calList, unusedList);
    }
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
        <DragDropContext onDragEnd={onDragEnd}>
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
              setCalendarMeals={setCalendarMeals}
              setUnusedMeals={setUnusedMeals}
              unusedMeals={unusedMeals}
              searchMeals={searchMeals}
            />        
        </DragDropContext>
      </main>
  );
}

export default App;
