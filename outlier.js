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

function findOutlier2(arr){
    let evens = arr.filter(ele => ele % 2 === 0);
    let odds = arr.filter(ele => ele % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier2([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier2([160, 3, 1719, 19, 11, 13, -21]));