console.log("定义数组")
let daysOfWeek1 = new Array(); // {1}
daysOfWeek2 = new Array(7); // {2}
daysOfWeek3 = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}

console.log(daysOfWeek1)
console.log(daysOfWeek2)
console.log(daysOfWeek3)

console.log("添加元素");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

console.log("利用数组长度添加");
numbers[numbers.length] = 10;
console.log(numbers);

console.log("使用push方法");
numbers.push(11);
console.log(numbers);
numbers.push(12, 13);
console.log(numbers);

console.log("在数组开头从插入元素")
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1);

console.log(numbers);

console.log("使用unshift")
numbers.unshift(-2)
console.log(numbers)
numbers.unshift(-4, -3);
console.log(numbers)

console.log("删除数组中的第一个元素")
numbers.shift()
console.log(numbers)

console.log("在任意位置删除元素")
numbers.splice(5, 3)
console.log(numbers)

console.log("在任意位置添加元素")
numbers.splice(5, 0, 2, 3, 4)
console.log(numbers)

console.log("在任意位置替换元素")
numbers.splice(5, 3, 2, 3, 4)
console.log(numbers)