import React, { useState, useEffect } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import UnusedMeals from '../components/Calendar/UnusedMeals';
import Header from '../components/Header/Header';

//Data and functions
import { mealOptions } from '../data/mealOptions';
import { DragDropContext } from 'react-beautiful-dnd';
import { fillMealList } from '../functions/selectMealsForCal';

//Styles
import '../styles/App.scss';
import { ListGroup } from 'react-bootstrap';

//Misc

const weekdays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

function MealPicker() {
  
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

  const setCalAndUnused = (calList, unusedList) => {
    setCalendarMeals(calList);
    setUnusedMeals(unusedList);
  }

  const selectMeals = () => {
    setCalAndUnused(...fillMealList(unusedMeals, calendarMeals));
  }

  const clearCalendar = () => {
    setCalendarMeals(['','','','','','','']);
    setUnusedMeals(meals);
  }

  const sortAscending = () => {
    let newUnusedMealsList = Array.from(unusedMeals);
    
    newUnusedMealsList.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA === nameB) return 0;
        return nameA < nameB ? -1 : 1;
    });

    setUnusedMeals(newUnusedMealsList);
}

  const onDragEnd = result => {
    console.log(result);
    const { destination, source } = result;
    
    let unusedList = Array.from(unusedMeals);
    let calList = Array.from(calendarMeals);

    const movedItemUnused = () => unusedList.splice(source.index, 1);

    let destIdx = weekdays.indexOf(destination.droppableId);
    let sourceIdx = weekdays.indexOf(source.droppableId);

    //location checks
    const isSameLocation = destination.droppableId === source.droppableId && destination.index === source.index;
    const fromUnusedToUnused = destination.droppableId === "unused-meals" && source.droppableId === "unused-meals";
    const fromUnusedToCal = source.droppableId === "unused-meals";
    const fromCalToCal = source.droppableId !== 'unused-meals' && destination.droppableId !== 'unused-meals';
    const fromCalToUnused = source.droppableId !== 'unused-meals';

    if(!destination) return;
    if(isSameLocation) return;

    if(fromUnusedToUnused) {
      unusedList.splice(destination.index, 0, ...movedItemUnused());
      return setUnusedMeals(unusedList);
    }

    if (fromUnusedToCal) {
      let removedCalItem = calList.splice(destIdx, 1, ...movedItemUnused());
      if(Object.keys(...removedCalItem).length) {unusedList.splice(0, 0, ...removedCalItem)}
      return setCalAndUnused(calList, unusedList);
    }

    if(fromCalToCal) {
      if(calList[destIdx]) {
        let movedItem = calList.splice(sourceIdx, 1);
        calList.splice(destIdx, 0, ...movedItem);
      } else {
        let movedItem = calList.splice(sourceIdx, 1, "");
        calList.splice(destIdx, 1, ...movedItem);
      }
      return setCalendarMeals(calList);
    }

    if(fromCalToUnused) {
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
                sortAscending={sortAscending}
            />
            <WeekCalendar 
              calendarMeals={calendarMeals}
              setCalendarMeals={setCalendarMeals}
              setUnusedMeals={setUnusedMeals}
              unusedMeals={unusedMeals}
              searchMeals={searchMeals}
              clearCalendar={clearCalendar}
            />        
        </DragDropContext>
      </main>
  );
}

export default MealPicker;
