function findOutlier(arr){
    let evenArr = [];
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }
    if(evenArr.length === 1){
        return evenArr[0];
    } else {
        return oddArr[0];
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));