// 1. Write a function named calculateDifference
function calculateDifference(a, b) {
    return a - b;
}

// 2. Write a function named isOdd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Write a function named findMin
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Write a function named filterEvenNumbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Write a function named sortArrayDescending
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 6. Write a function named lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (!str) return ""; // Handle empty string
    return str[0].toLowerCase() + str.slice(1);
}

// 7. Write a function named findAverage
function findAverage(arr) {
    if (arr.length === 0) return 0; // Handle empty array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// 8. Write a function named isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(calculateDifference(10, 5));
console.log(isOdd(7)); // true
console.log(findMin([3, 1, 4, 1, 5, 9]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
console.log(sortArrayDescending([5, 3, 8, 1]));
console.log(lowercaseFirstLetter("Hello"));
console.log(findAverage([1, 2, 3, 4, 5]));
console.log(isLeapYear(2024));