/*  ======================================
Buble Sort Algorithm
======================================== */

function bubbleSort(list) {
    // Iterate all elements of array
    for (let i = 0; i < list.length - 1; i++) {
        
        // Prepare length ignoring the last position
        let currentLenght = list.length -1 -i;
        //console.log(list);

        // Iterate all elements of array comparing values
        for (let j = 0; j < currentLenght; j++) {
            //compare two values and swap position if needed
            //console.log(list[j] + " + " + list[j + 1]);
            if (list[j] > list[j + 1]) {
                let aux = list[j];
                list[j] = list[j+1];
                list[j+1] = aux;
            }
        }
    }
    return list;
}

const btnBubble = document.getElementById("bubleSortBtn");
btnBubble.addEventListener('click', function(e) {
    let list = [4,5,22,42,15,23,43,13,1,8];
    let result = bubbleSort(list);
    document.getElementById('answer3').innerHTML= "Result by bubble sort is: "+ result;
})
