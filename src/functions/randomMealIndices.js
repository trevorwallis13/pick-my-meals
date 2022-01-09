export const randomMealIndices = (mealOptions) => {
    let indices = [];
    let randomizedIndices = [];

    for (let i = 0; i<mealOptions.length; i++) indices.push(i);

    while(randomizedIndices.length < 7) {
        const randIdx = indices.splice(Math.floor(Math.random() * indices.length), 1);
        randomizedIndices.push(randIdx); 
    }
    return [randomizedIndices, indices]
}