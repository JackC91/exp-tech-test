/*
Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

Write a function (called solution) that, given a string S representing the day of the week and an integer K (between 0 and 500), returns the day of the week that is K days later

Ie 
If S = "Wed" and K = 2 the function should return "Fri"
Or if S = "Sat" and K = 23 the function should return "Mon"
*/

function solution(S, K) {
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day_index = days.indexOf(S)
let final_day = day_index + K
return days[final_day]
}

console.log(solution("Wed", 5));