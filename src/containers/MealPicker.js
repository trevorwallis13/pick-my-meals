import React, { useState, useEffect } from 'react';

// Components
import WeekCalendar from '../components/Calendar/WeekCalendar';
import PickMeals from '../components/Calendar/PickMeals';
import UnusedMeals from '../components/Calendar/UnusedMeals';

//Data and functions
import { DragDropContext } from 'react-beautiful-dnd';
import { fillMealList } from '../functions/selectMealsForCal';

//Styles
import '../styles/App.scss';

//Misc

const weekdays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const MealPicker = ({ currentUser}) => {

  //State management - useState hooks

  const [meals, setMeals] = useState('');
  const [calendarMeals, setCalendarMeals] = useState(['','','','','','','']);
  const [unusedMeals, setUnusedMeals] = useState('');
  const [searchMeals, setSearchMeals] = useState('');

  // State management - Update state functions

  const getUnusedMealList = () => {
    
    if(meals.length) {
      const calMealsIds = calendarMeals.map(meal => meal.id)
      const unusedMealList = meals.filter(meal => calMealsIds.indexOf(meal.id) === -1);
      
      const filteredUnusedMeals = unusedMealList.filter(meal => {
        const mealName = meal.meal_name.toLowerCase();
        const searchVal = searchMeals.toLowerCase();
        return mealName.includes(searchVal);
    })
      setUnusedMeals(filteredUnusedMeals);
    }
  }

  const selectMeals = () => {
    setCalendarMeals(fillMealList(unusedMeals, calendarMeals));
  }

  const clearCalendar = () => {
    setCalendarMeals(['','','','','','','']);
  }

  const sortAscending = () => {
    let mealsSorted = Array.from(meals);
    
    mealsSorted.sort((a, b) => {
        let nameA = a.meal_name.toLowerCase();
        let nameB = b.meal_name.toLowerCase();

        if (nameA === nameB) return 0;
        return nameA < nameB ? -1 : 1;
    });

    setMeals(mealsSorted);
}

  const onDragEnd = result => {

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
      calList.splice(destIdx, 1, ...movedItemUnused());
      return setCalendarMeals(calList);
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
      calList.splice(sourceIdx, 1, "");
      return setCalendarMeals(calList);
    }
  }

  // State management - useEffect on load
  
  useEffect(() => {
    fetch('http://localhost:3001/meals', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: currentUser.id})
    })
      .then(res => res.json())
      .then(meals => {
        setMeals(meals);
      });
  }, []);

  // State management - useEffect on change

  useEffect(() => {
    getUnusedMealList();
  }, [meals, calendarMeals, searchMeals]);

  useEffect(() => {
    fetch('http://localhost:3001/meals/calendar', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user_id: currentUser.id})
    })
      .then(res => res.json())
      .then(data => {
        setCalendarMeals(data.map(day => day.id ? day : ""))
      })
      .catch(err => console.error(err));
  }, [currentUser])

  useEffect(() => {
    let calMealsData = calendarMeals.map((meal, i) => {
      return {user_id: currentUser.id, day_of_week: i+1, meal_id: meal.id}
    })

    calMealsData.forEach(meal => {
      fetch('http://localhost:3001/meals/calendar/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(meal)
      })
        .catch(err => console.error(err))
    })
  }, [calendarMeals])

  return (
    
      <section className='container'>
        <DragDropContext onDragEnd={onDragEnd}>
          <PickMeals 
              selectMeals={selectMeals}
              meals={meals}
              setMeals={setMeals}
              currentUser={currentUser}
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
              searchMeals={searchMeals}
              clearCalendar={clearCalendar}
            />        
        </DragDropContext>
      </section>
  );
}

export default MealPicker;
