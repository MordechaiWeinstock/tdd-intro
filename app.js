// 1.Write a function that will take an array of numbers, add them all together andreturn the sum. It should work with any array you pass it.Eg. INPUT: [1,2,3,4]OUTPUT: 10

const sumArray = (arr) => {
    return (arr.reduce((acc, cur) => acc + cur));
}

// 2.Write a function that given two strings, will return true if they match and false ifthey don’t.

const checkStr = (str1, str2) => {
    return str1 === str2;
}

// 3.Write a function that can take a name and return their initials.Eg - INPUT: “Ben Maudslay”OUTPUT: “BM”

const initials = (str) => {
    let newStr = "";
    str.split(" ").forEach(el => newStr += el.charAt(0));
    return newStr;
}

// 4.Write a function that can take an array of random numbers (any array), then splitthe array into two separate arrays, one containing even numbers and the othercontaining odd numbers.Eg. INPUT: [1,3,12,15,44,41]   ← an array goes inOUTPUT: {        evens: [12, 44],        odds: [1, 3, 15, 41]       ← an object comes out (is returned)}

const evenOddSeperator = (arr) => {
    let obj = {
        odds: [],
        evens: []
    }
    arr.forEach(num => num % 2 ? obj.odds.push(num) : obj.evens.push(num));
    return obj;
}

// 5.Write a function that when you pass it a string (sentence) will return the totalnumber of characters, the total number of vowels, and the total number ofconsonants.Eg. INPUT: “hello code nation”OUTPUT: {total: 17,vowels: 7,consonants: 10}

const strInfo = (input) => {
    let str = input.toLowerCase(),
    vowels = "aeiou",
    consonants = "bcdfghjklmnpqrstvwxyz",
    obj = {
        total: 0,
        vowels: 0,
        consonants: 0  
    }
    for (let char of str) {
        if (char.charCodeAt() !== 32) {
            obj.total++;
            if (vowels.includes(char)) {
                obj.vowels++;
            } else if (consonants.includes(char)) {
                obj.consonants++;
            }
        }
    }
    return obj;
}


module.exports = {sumArray, checkStr, initials, evenOddSeperator, strInfo}