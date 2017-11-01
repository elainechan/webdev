function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        if (arr[i] > arr[i + 1]) {
            arr[i] = arr[i + 1];
            curr = arr[i + 1];    
        } else {
            curr = arr[i + 1];
        }
    }
    return arr;
}
