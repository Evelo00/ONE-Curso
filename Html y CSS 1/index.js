//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//    Example
//  filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//Solution

function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

//Solution

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
