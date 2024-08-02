// Sample data:
const x = [1, 2, 3, 4, 5];
const y = [2, 3, 5, 7, 11];

// Calculate the average of an array
const average = arr => arr.reduce((sum, val) => sum + val, 0) / arr.length;

// Calculate the average of x and y
const xAvrg = average(x);
const yAvrg = average(y);

// Calculate the slope (m) and intercept (b) of the linear regression line
let numerator = 0, denominator = 0;
for (let i = 0; i < x.length; i++) {
  numerator += (x[i] - xAvrg) * (y[i] - yAvrg);
  denominator += (x[i] - xAvrg) ** 2;
}
const slope = numerator / denominator;
const intercept = yAvrg - slope * xAvrg;

// Display the regression coefficients (slope and intercept)
console.log("Slope (m):", slope);
console.log("Intercept (b):", intercept);

// Function to predict y value for a given x value using the linear regression model
const predict = xValue => slope * xValue + intercept;

// Predict a new value
const newX = 6;
const predictedY = predict(newX);
console.log(`Predicted y value for x = ${newX}:`, predictedY);
