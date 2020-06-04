/*  ======================================
Merge Sort Algorithm
======================================== */

//Compare values of two arrays considering the merge sort order
function compare(leftSide, rightSide) {
    let result = [];

    // iterate all elements of two list in order
    while (leftSide.length > 0 || rightSide.length > 0) {
        // compare values, add to a new array, remove value from current array
        if (!rightSide.length || (leftSide[0] < rightSide[0])) {
            result.push(leftSide[0]);
            leftSide.shift();
          } else {
            result.push(rightSide[0]);
            rightSide.shift();
        }
    }
    return result;
}

//Divide the array into two arrays and sort each recursively
const mergeSort = function(list){
    if (list.length < 2) {
        return list;
    }
    //Get the mid of the list
    let midIndex = Math.ceil(list.length / 2);
    
    //Split the array into 2 arrays using slice method
    let list1 = list.slice(0, midIndex);
    let list2 = list.slice(midIndex);

    return compare(mergeSort(list1),mergeSort(list2));
}

const btnMerge = document.getElementById("mergSortBtn");
btnMerge.addEventListener('click', function(e) {
    let list = [4,5,22,42,15,23,43,13,1,8];
    let result = mergeSort(list);
    document.getElementById('answer4').innerHTML= "Result by merge sort is: "+ result;
})


