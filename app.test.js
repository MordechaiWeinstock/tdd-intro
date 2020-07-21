const { sumArray, checkStr, initials, evenOddSeperator, strInfo } = require('./app');

test("sums up any passed array of numbers. equals 10 if array indecies are 1, 2, 3 and 4", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
});

// 2.Write a function that given two strings, will return true if they match and false ifthey don’t.

test("returns true if the two strings passsed match", () => {
    expect(checkStr("mordechai", "mordechai")).toBe(true);
});

test("returns false if the two strings passed don't match", () => {
    expect(checkStr("mordechai", "weinstock")).toBe(false);
});

// 3.Write a function that can take a name and return their initials.Eg - INPUT: “Ben Maudslay”OUTPUT: “BM”

test("returns a string with initials of the names passed in as a string", () => {
    expect(initials("Mordechai Weinstock")).toBe("MW");
});

// 4.Write a function that can take an array of random numbers (any array), then splitthe array into two separate arrays, one containing even numbers and the othercontaining odd numbers.Eg. INPUT: [1,3,12,15,44,41]   ← an array goes inOUTPUT: {        evens: [12, 44],        odds: [1, 3, 15, 41]       ← an object comes out (is returned)}

test("returns an object with two arrays, even and odd numbers seperated that were passed as an array", () => {
    const testingObject = {
        odds: [3, 89, 79],
        evens: [34, 2, 10]
    }
    expect(evenOddSeperator([34, 3, 89, 79, 2 , 10])).toMatchObject(testingObject);
});

// 5.Write a function that when you pass it a string (sentence) will return the totalnumber of characters, the total number of vowels, and the total number ofconsonants.Eg. INPUT: “hello code nation”OUTPUT: {total: 17,vowels: 7,consonants: 10}

test("takes a string, returns object with total string characters, total vowels and total consonants", () => {
    const testingObject = {
        total: 36,
        vowels: 12,
        consonants: 19  
    }
    expect(strInfo("Hello!! My name is Mordechai Weinstock...")).toMatchObject(testingObject);
});