// 1. let / const
let score = 10;
const MAX = 100;
console.log("Score:", score, "Max:", MAX);

// 2. Arrow function
const square = n => n * n;
console.log("Square of 5:", square(5));

// 3. Destructuring
const student = { id: 1, name: "Hoàng", age: 22 };
const { id, name, age } = student;
console.log(`Student: ${name}, Age: ${age}`);

const arr = [10, 20, 30];
const [first, second] = arr;
console.log("First:", first, "Second:", second);

// 4. Spread / Rest
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log("Spread array:", c);

const sum = (...nums) => nums.reduce((t, n) => t + n, 0);
console.log("Sum:", sum(1, 2, 3, 4));

// 5. Template string
console.log(`Xin chào ${name}, năm nay bạn ${age} tuổi.`);

// 6. Module import/export
import { user, getUserInfo } from "./user.js";

console.log("Thông tin user:", getUserInfo(user));

