// 1
// function userName(name) {
//     return name.split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }
// console.log(userName("saidburxon alisher"));

// 2
// function string(str) {
//     return str.split('').reverse().join('');
// }
// console.log(string("hello"));

// 3
// function number(arr) {
//     return arr.reduce(function(sum, num) {
//         return sum + num;
//     }, 0) / arr.length;
// }
// console.log(number([1, 2, 3, 4, 5]));

// 4
// function elementLengths(arr) {
//     return arr.map(function(element) {
//         return element.length;
//     });
// }
// console.log(elementLengths(["apple", "banana", "cherry"]));

// 5
// function numbers(arr) {
//     return arr.filter(function(num) {
//         return num % 2 != 0;
//     });
// }
// console.log(numbers([1, 2, 3, 4, 5]));

// 6
// function objects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }
// console.log(objects({a: 1}, {b: 2}));

// 7
// function string(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(string("HALA MADRID :)"));

// 8
// function toArray(obj) {
//     return Object.values(obj);
// }
// console.log(toArray({a: 1, b: 2, c: 3}));

// 9
// function minMax(arr) {
//     return { min: Math.min.apply(null, arr), max: Math.max.apply(null, arr) };
// }
// console.log(minMax([1, 2, 3, 4, 5]));

// 10
// function count(str) {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(count("hello world"));


// 11
// function addTwo(arr) {
//     return arr.map(function(num) {
//         return num + 2;
//     });
// }
// console.log(addTwo([1, 2, 3]));

// 12
// function word(arr) {
//     return arr.reduce(function(longest, word) {
//         return word.length > longest.length ? word : longest;
//     }, '');
// }
// console.log(word(["apple", "banana", "cherry"]));

// 13
// function filterNum(arr) {
//     var avg = arr.reduce(function(sum, num) {
//         return sum + num;
//     }, 0) / arr.length;
//     return arr.filter(function(num) {
//         return num > avg;
//     });
// }
// console.log(filterNum([1, 2, 3, 4, 5]));

// 14
// function trimString(str) {
//     return str.slice(1, -1);
// }
// console.log(trimString("hello"));

// 15
// function number(arr) {
//     return arr.reduce(function(sum, num) {
//         return sum + num * num;
//     }, 0);
// }
// console.log(number([1, 2, 3]));

// 16
// function reverse(arr) {
//     return arr.reverse();
// }
// console.log(reverse([1,2,3]));

// 17
// function words(str) {
//     return str.split(' ').map(function(word) {
//         return word.toUpperCase();
//     }).join(' ');
// }
// console.log(words("hello world"));

// 18
// function olderThan(age, people) {
//     return people.filter(function(person) {
//         return person.age > age;
//     });
// }
// console.log(olderThan(18, [{name: "Alisher", age: 20}, {name: "Valijon", age: 17}]));

// 19
function count(arr, element) {
    return arr.filter(function(el) {
        return el === element;
    }).length;
}
console.log(count([1, 2, 2, 3, 2], 2));

// 20
function commonLetters(str1, str2) {
    return Array.from(new Set(str1)).filter(function(char) {
        return str2.includes(char);
    }).join('');
}
console.log(commonLetters("hello", "world"));
