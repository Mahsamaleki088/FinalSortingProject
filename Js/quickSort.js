function quickSort(list, first, last) {
    let firstPointer = first;
    let lastPointer = last;
    let centerValue = list[parseInt((firstPointer + lastPointer) / 2)];

    do {
        while (list[firstPointer] < centerValue) {
            firstPointer++;
        }

        while (list[lastPointer] > centerValue) {
            lastPointer--;
        }

        if (firstPointer <= lastPointer) {
            let tmp = list[lastPointer];
            list[lastPointer] = list[firstPointer];
            list[firstPointer] = tmp;
            firstPointer++;
            lastPointer--;
        }
    } while (firstPointer <= lastPointer)

    if (first < lastPointer) {
        quickSort(list, first, lastPointer);
    }
    if (firstPointer < last) {
        quickSort(list, firstPointer, last);
    }
}

const quickSortBtn = document.getElementById("quickSortBtn");
quickSortBtn.addEventListener('click', function(e) {
    let list = [4, 5, 22, 42, 15, 23, 43, 13, 1, 8];
    quickSort(list, 0, list.length - 1);
    document.getElementById('answer5').innerHTML = "Result by quick sort is: " + list;
})