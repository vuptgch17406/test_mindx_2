//1.
let arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]

function allLongestStrings (inputArray) {
    let total = inputArray[0]
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray.length > total.length){
            total = inputArray[i]
        }
    }
    return total
}
console.log(allLongestStrings(arr))

let arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]
let total = [];

function longestString(inputArray) {
    let lengTh = 0;
    for(var i =0; i < arr.length; i++){
      if(lengTh < arr[i].length){
        lengTh = arr[i].length;
      }
    }
    for(var j =0; j < arr.length; j++){
      if(arr[j].length == lengTh){
        total.push(arr[j]);
      }
    }
   if(total.length == 1){
     return total[0]
   }else{
      return total
  }
}
console.log(longestString(arr))

//2.
function alternatingSums(array) {
    let resultsArray = [0, 0];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            resultsArray[0] += array[i];
        } else {
            resultsArray[1] += array[i];
        }
    }
    return resultsArray;
}
    let nums = [60, 40, 55, 75, 64];
    let result = alternatingSums(nums);
    console.log("result: ", result);





