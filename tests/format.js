'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно с одной строкой', function (assert) {
		const input = [0, 1, 2, 1000, -1000];

		const expected = '0 1 2 1000 -1000';

		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format работает правильно с пустым массивом', function (assert) {
		const input = [];

		const expected = '';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно с некорректным вводом', function (assert) {
		const input1 = "string";
		const input2 = [1, 2, 3];
		const input3 = [1, 'a', 2.3];

		const expected = null;

		assert.strictEqual(format(input1, 1), expected);
		assert.strictEqual(format(input1, 'cols'), expected);
		assert.strictEqual(format(input2, 'cols'), expected);
		assert.strictEqual(format(input3, 1), expected);
	});
});
