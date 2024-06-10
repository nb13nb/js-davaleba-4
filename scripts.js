დავალება 4:
// 1
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 2, 1, "strawberry");
console.log(fruits);

//2
let info = "good day";
let newWord = info.slice(5);
console.log(newWord);

//3
function stringLength(string) {
    return string.length;
}

//4
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html", "css");
console.log("ელემენტების რაოდენობა მასივში:", array.length);
array.shift();
array.pop();
console.log("საბოლოო მასივი:", array);

//5
let xili = ["ფორთოხალი", "ბანანი", "კივი"];
console.log(xili.length);
xili.push("ვაშლი", "ანანასი");
xili.unshift("საზამთრო");
console.log("ელემენტების რაოდენობა მასივში დამატებების შემდეგ:", xili.length);
xili.splice(2, 0, "მანგო");
xili.shift();
xili.pop();
console.log(xili.length);
console.log("საბოლოო მასივი:", xili);


//6
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);

//7
let array7 = [15, 100, 25, 10, 36];
let index = array7.indexOf(10);
array7.splice(index, 1);
console.log(array7);


//8
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, 'three');
console.log(array8);

//9
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach(function (number) {
    sum += number;
});
console.log(sum);
