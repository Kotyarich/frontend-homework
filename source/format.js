'use strict';

function format(array, cols) {
    if (typeof cols != 'number' || !(array instanceof Array)) {
        return null;
    }
    if (array.some(item => typeof item != 'number')) {
        return null;
    }

    const strings = array.map(num => num.toString());
    const lens = new Array(cols).fill(0);

    strings.forEach((str, i) => {
        lens[i % cols] = Math.max(lens[i % cols], str.length);
    });

    const res = strings.reduce((result, str, i) => {
        const spaces = ' '.repeat(lens[i % cols] - str.length);
        const endSymbol = (i + 1) % cols ? ' ' : '\n';
        return result + spaces + str + endSymbol;
    }, '');

    return res.slice(0, -1);
}