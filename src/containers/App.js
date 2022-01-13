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

  const selectMeals = () => {
    const [ mealsForWeek, remainingMeals ] = randomMeals(meals);
    setCalendarMeals(mealsForWeek);
    setUnusedMeals(remainingMeals);
  }

  const setCalAndUnused = (calList, unusedList) => {
    setCalendarMeals(calList);
    setUnusedMeals(unusedList);
  }

 



  const onDragEnd = result => {
    console.log(result);
    const { destination, source, draggableId } = result;
    const movedItemUnused = () => unusedList.splice(source.index, 1);
    let unusedList = Array.from(unusedMeals);
    let calList = Array.from(calendarMeals);
    let destIdx = weekdays.indexOf(destination.droppableId);
    let sourceIdx = weekdays.indexOf(source.droppableId);
    
    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (destination.droppableId === "unused-meals" && source.droppableId === "unused-meals") {
      calList.splice(destination.index, 0, ...movedItemUnused());
      return setUnusedMeals(calList);
    }

    if (source.droppableId === "unused-meals") {
      let removedCalItem = calList.splice(destIdx, 1, ...movedItemUnused());
      if(Object.keys(...removedCalItem).length) {unusedList.splice(0, 0, ...removedCalItem)}
      return setCalAndUnused(calList, unusedList);
    }

    if(source.droppableId !== 'unused-meals' && destination.droppableId !== 'unused-meals') {
      let movedItem = calList.splice(sourceIdx, 1);
      calList.splice(destIdx, 0, ...movedItem);
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
              unusedMeals={unusedMeals}
              searchMeals={searchMeals}
            />        
        </DragDropContext>
      </main>
  );
}

export default App;
