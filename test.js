const AlphaBeta = require('./index');

test('call alphabets', () => {
    expect(AlphaBeta.call()).toEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
});
