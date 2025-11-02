const { mergeTimeRanges } = require('./merger.js');


let ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
let threshold1 = 200;

console.log('--- Example 1 ---');
console.log('Input Ranges:', ranges1);
console.log('Threshold:', threshold1);
console.log('Expected Output:', '[[1000, 2000], [2500, 4100], [8000, 9500]]');
console.log('Actual Output:', JSON.stringify(mergeTimeRanges(ranges1, threshold1)));
console.log('\n');



let ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
let threshold2 = 4;

console.log('--- Example 2 ---');
console.log('Input Ranges:', ranges2);
console.log('Threshold:', threshold2);
console.log('Expected Output:', '[[0, 10], [15, 20], [25, 30]]');
console.log('Actual Output:', JSON.stringify(mergeTimeRanges(ranges2, threshold2)));
console.log('\n');


let ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
let threshold3 = 3;

console.log('--- Example 3 ---');
console.log('Input Ranges:', ranges3);
console.log('Threshold:', threshold3);
console.log('Expected Output:', '[[0, 35]]');
console.log('Actual Output:', JSON.stringify(mergeTimeRanges(ranges3, threshold3)));
console.log('\n');


let ranges4 = [
  [8000, 9000],
  [1000, 2000],
  [2500, 3000]
];
let threshold4 = 100;

console.log('--- Example 4 (Unsorted) ---');
console.log('Input Ranges:', ranges4);
console.log('Threshold:', threshold4);
console.log('Expected Output:', '[[1000, 2000], [2500, 3000], [8000, 9000]]');
console.log('Actual Output:', JSON.stringify(mergeTimeRanges(ranges4, threshold4)));
console.log('\n');


let ranges5 = [];
let threshold5 = 100;

console.log('--- Example 5 (Empty) ---');
console.log('Input Ranges:', ranges5);
console.log('Threshold:', threshold5);
console.log('Expected Output:', '[]');
console.log('Actual Output:', JSON.stringify(mergeTimeRanges(ranges5, threshold5)));
console.log('\n');
