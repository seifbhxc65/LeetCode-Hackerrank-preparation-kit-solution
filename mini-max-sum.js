'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INeTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
  let min=arr[0];
  let max=arr[0];
  let sum=arr[0];
  for(let i=1;i<arr.length;i++){
      sum+=arr[i];
      min=arr[i]<min?arr[i]:min;
      max=arr[i]>max?arr[i]:max;
  }
  return [sum-max,sum-min];
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const mmarr=miniMaxSum(arr);
console.log(mmarr[0],mmarr[1]);
}
