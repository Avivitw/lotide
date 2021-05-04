# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @avivitw/lotide`

**Require it:**

`const _ = require('@avivitw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: A function that take an array and retrieve the first element from the array
* `function2(tail)`: A function that take an array and retrieve  every element except the head (first element) of the array.
* `function3(middle)`:  A function that take in an array and return the middle-most element(s) of the given array
* `function4(countLetters)`:  A function that take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `function5(countOnly)`:  A function that take in a collection of items and return counts for a specific subset of those items.
* `function6(letterPositions)`:  A function that will return all the indices (zero-based positions) in the string where each character is found.
* `function7(map)`:  A function that will take in two arguments: An array to map and a callback function. The map function will return a new array based on the results of the callback function
* `function8(takeUntil)`:  A function that take in two parameters as well: The array to work with and the callback and will keep collecting items from a provided array until the callback provided returns a truthy value.
* `function9(without)`: A function that take in a source array and a itemsToRemove array. It return a new array with only those elements from source that are not present in the itemsToRemove array.



