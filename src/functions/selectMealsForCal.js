export const fillMealList = (unusedMeals, calendarMeals) => {
    const emptyDays = getEmptyDays(calendarMeals);
    let newUnusedMealsList = Array.from(unusedMeals);
    let newCalMealsList = Array.from(calendarMeals);

    for(let i = 0; i<emptyDays.length; i++) {
      const randIdx = Math.floor(Math.random() * newUnusedMealsList.length);
      const newMeal = newUnusedMealsList.splice(randIdx, 1);

      newCalMealsList.splice(emptyDays[i], 1, ...newMeal);
    }
    if(newCalMealsList.length < 7) {
      for (let i = newCalMealsList.length; i<7; i++) {
        newCalMealsList.push("");
      }
    }
    return newCalMealsList

  }

const getEmptyDays = (calendarMeals) => {
    let emptyIndices = [];

    for(let i = 0; i<7; i++) {
      if(!Object.keys(calendarMeals[i]).length) {
        emptyIndices.push(i);
      }
    }
    return emptyIndices
  }