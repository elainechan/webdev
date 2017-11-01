function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < a[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = a[min];
        a[min] = temp;
    }
    return arr;
}
