class Meal {
    constructor(name, type, calories) {
        this._name = name;
        this._type = type;
        this._calories = calories;
        this._daysSinceLastEaten = 0;
    }
    
    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }
    
    get calories() {
        return this._calories;
    }
    
    get daysSinceLastEaten() {
        return this._daysSinceLastEaten;
    }

    updateDaysSinceLastEaten() {
        this._daysSinceLastEaten++;
    }
}

const meals = [];
meals.push(new Meal('eggs', 'breakfast', 400))
meals.push(new Meal('shake', 'breakfast', 280))
meals.push(new Meal('cereal', 'breakfast', 300))
meals.push(new Meal('protein bar', 'snack', 200))
meals.push(new Meal('trail mix', 'snack', 180))
meals.push(new Meal('apple', 'snack', 50))
meals.push(new Meal('salad', 'lunch', 425))
meals.push(new Meal('chicken bowl', 'lunch', 550))
meals.push(new Meal('sandwich', 'lunch', 430))
meals.push(new Meal('chinese food', 'dinner', 650))
meals.push(new Meal('pasta', 'dinner', 525))
meals.push(new Meal('fish', 'dinner', 350))

function generateMealPlan(meals) {
    let breakfast = getRandomMeal(meals, 'breakfast');
    let snack = getRandomMeal(meals, 'snack');
    let lunch = getRandomMeal(meals, 'lunch');
    let dinner = getRandomMeal(meals, 'dinner');
    let calorieSum = breakfast.calories + snack.calories + lunch.calories + dinner.calories
    return `Your meals for the day are a ${breakfast.name} for breakfast, ${lunch.name} for lunch, some ${dinner.name} for dinner, 
    and ${snack.name} for a snack if you get hungry. This equals ${calorieSum} calories for the day`
}


function getRandomMeal(allMeals, type) {
    let possibleMeals = allMeals.filter(obj => {
        return obj.type === type
    })
    let randomIndex = Math.floor(Math.random() * possibleMeals.length)
    return possibleMeals[randomIndex]
}

let testOne = generateMealPlan(meals)
console.log(testOne)
