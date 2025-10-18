//Task 1
//Step 1:Create an array of five favourite cities
let favCities = ["Chicago", "CherryHill", "Austin", "Seattle", "Boise"];

//Step 2: Use forEach() to log each city in uppercase
favCities.forEach(city => {
    console.log(city.toUpperCase());
})



//Task 2
// Step 1: Create an array called numbers with 1-5
let numbers = [1, 2, 3, 4, 5];

// Step 2: Use map() to create an array of squares
let squares = numbers.map(num => num * num);

// Step 3: Log the new array
console.log(squares);

//Task 3
// Step 1: Create an array called scores
let scores = [85, 42, 90, 75, 30, 100];

// Step 2: Use filter() to create a new array of scores >= 80
let highScores = scores.filter(score => score >= 80);

// Step 3: Log the new array
console.log(highScores);


//Task 4
// Step 1: Create an array of favorite foods
let favoriteFood = ["Pizza", "Icecream", "Chicken Nuggets", "Pastry", "Kulfi", "Yogurt"];

// Step 2: Use find() to locate the first food with more than 4 letters
let spotLongFood = favoriteFood.find(food => food.length > 4);
console.log(spotLongFood);     // Output the first food with more than 4 letters

// Step 3: Use findIndex() to get the index of that food
let longfoodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(longfoodIndex);     // Output the index of the food


