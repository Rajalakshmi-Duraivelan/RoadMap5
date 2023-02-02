// Print odd numbers in an array
//anonymous  :  
let odd = function (array) {
  let oddNos = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      oddNos.push(array[i]);
    }
  }
  console.log("Anonymous Function - odd numbers in an array - ", oddNos);
};
odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//IIFE :       
(function (array) {
  let oddNos = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      oddNos.push(array[i]);
    }
  }
  console.log("IIFE Function - odd numbers in an array - ", oddNos);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Convert all the strings to title caps in a string array
//anonymous  :  
let titleCaps = function (strArr) {
  let result = [];
  for (var i = 0; i < strArr.length; i++) {
    let x = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    result.push(x);
  }
  console.log("Anonymous Function -  strings to title caps in a string array - ", result);
};
titleCaps(['apple', 'orange', 'mango', 'banana']);
//IIFE :       
(function (strArr) {
  let result = [];
  for (var i = 0; i < strArr.length; i++) {
    let x = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    result.push(x);
  }
  console.log("IIFE Function -  strings to title caps in a string array - ", result);
})(['apple', 'orange', 'mango', 'banana']);
// Sum of all numbers in an array
//anonymous  :  
let sum = function (Arr) {
  let result = 0;
  for (var i = 0; i < Arr.length; i++) {
    result = result + Arr[i];
  }
  console.log("Anonymous Function - Sum of all numbers in an array - ", result);
};
sum([1, 2, 3, 4, 5]);
//IIFE :       
(function (Arr) {
  let result = 0;
  for (var i = 0; i < Arr.length; i++) {
    result = result + Arr[i];
  }
  console.log("IIFE Function - Sum of all numbers in an array - ", result);
})([1, 2, 3, 4, 5]);
// Return all the prime numbers in an array
//anonymous  :  
var prime = function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log("Anonymous Function - prime numbers in an array - ",numArray);
}
prime([2, 3, 17, 5, 20, 7, 8, 9, 10]);

//IIFE :       
(function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log("IIFE Function - prime numbers in an array - ", numArray);
})([2, 3, 17, 5, 20, 7, 8, 9, 10]);
// Return all the palindromes in an array
//anonymous  :  
var palindrome = function(strArr){
  strArr = strArr.filter((str)=>{
    let x = str.split('').reverse().join('');
    if(str!==x) return false;
    else return true;
  })
  console.log("Anonymous Function - palindromes in an array - ",strArr);
}
palindrome(['abcba','abc','xyzyx']);
//IIFE :       
(function(strArr){
  strArr = strArr.filter((str)=>{
    let x = str.split('').reverse().join('');
    if(str!==x) return false;
    else return true;
  })
  console.log("IIFE Function - palindromes in an array - ",strArr);
})(['abcba','abc','xyzyx']);

// Return median of two sorted arrays of the same size.
//Anonymous
var median = function(arr1,arr2){
  let med1 = -1, med2=-1;
  let arrSize = arr1.length;
  let i=0, j=0,count;
  let result;
  for(count=0;count<=arrSize;count++)
  {
    if(i==arrSize)
    {
      med1=med2;
      med2=arr2[0];
      break;
    }
    else if(j==arrSize)
    {
      med1=med2;
      med2=arr1[0];
      break;
    }
    if(arr1[i]<=arr2[j]){
      med1=med2;
      med2=arr1[i];
      i++;
    }
    else{
      med1=med2;
      med2=arr2[j];
      j++;
    }
  }
  result= (med1+med2)/2;
  console.log("Anonymous Function - median of two sorted arrays of the same size - ",result);
}
median([1,2,3],[8,17,20]);
// IIFE Function
(function(arr1,arr2){
  let med1 = -1, med2=-1;
  let arrSize = arr1.length;
  let i=0, j=0,count;
  let result;
  for(count=0;count<=arrSize;count++)
  {
    if(i==arrSize)
    {
      med1=med2;
      med2=arr2[0];
      break;
    }
    else if(j==arrSize)
    {
      med1=med2;
      med2=arr1[0];
      break;
    }
    if(arr1[i]<=arr2[j]){
      med1=med2;
      med2=arr1[i];
      i++;
    }
    else{
      med1=med2;
      med2=arr2[j];
      j++;
    }
  }
  result= (med1+med2)/2;
  console.log("IIFE Function - median of two sorted arrays of the same size - ",result);
})([1,2,3],[8,17,20]);
// Remove duplicates from an array
//Anonymous Function
var removeDuplicate = function(arr){
  let obj={},result=[];
  for(let i=0;i<arr.length;i++)
  {
    obj[arr[i]]=0;
  }
  for(let item in obj){
    result.push(item);
  }
  console.log("Anonymous Function - Remove duplicates from an array - ",result);
}
removeDuplicate([1,5,2,8,2,6,7,4,7,6,8]);
//IIFE Function
(function(arr){
  let obj={},result=[];
  for(let i=0;i<arr.length;i++)
  {
    obj[arr[i]]=0;
  }
  for(let item in obj){
    result.push(item);
  }
  console.log("IIFE Function - Remove duplicates from an array - ",result);
})([1,5,2,8,2,6,7,4,7,6,8]);
// Rotate an array by k times
//Anonymous Function
var rotate = function(arr,k){
  for(let i=1;i<=k;i++){
    let x = arr[arr.length - 1];
    arr.pop();
    arr.unshift(x);
  }
  console.log("Anonymous Function - Rotate an array by k times - ",arr);
} 
rotate([1,2,3,4,7],2);
//IIFE Function
(function(arr,k){
  for(let i=1;i<=k;i++){
    let x = arr[arr.length - 1];
    arr.pop();
    arr.unshift(x);
  }
  console.log("IIFE Function - Rotate an array by k times - ",arr);
})([1,2,3,4,7],2);