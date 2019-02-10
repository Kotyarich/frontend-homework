'use strict';

function format(array, cols) {
    if (typeof cols != 'number' || !(array instanceof Array)) {
        return null;
    }
    if (array.some(item => typeof item != 'number')) {
        return null;
    }

    const lens = new Array(cols).fill(0);

    for (let i = 0; i < array.length; i++) {
        if (lens[i % cols] < String(array[i]).length) {
            lens[i % cols] = String(array[i]).length;
        }
    }

    let res = '';
    for (let i = 0; i < array.length; i++) {
        res += ' '.repeat(lens[i % cols] - String(array[i]).length)
            + array[i]
            + ((i + 1) % cols ? ' ' : '\n');
    }

    return res.slice(0, -1);
}