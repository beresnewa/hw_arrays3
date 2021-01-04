const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const changeArray = (array) => {
    let middle = Math.ceil(array.length / 2) - 1;

    if (array.length % 2 != 0) {
        console.log(array.slice(middle + 1).concat(array[middle], array.slice(0, middle)));
    } else {
        console.log(array.slice(middle + 1).concat(array.slice(0, middle + 1)));
    }
}

changeArray(numbers);