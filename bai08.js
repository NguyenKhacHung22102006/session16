let firstNumber = prompt("Nhập số thứ nhất:");
let secondNumber = prompt("Nhập số thứ hai:");
let string = prompt(" Nhập số thứ ba: ");
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
string = parseFloat(string);
let newNumber=Math.max(firstNumber ,secondNumber, string);
document.write(`so lon nhat trong ba so la ${newNumber}`);