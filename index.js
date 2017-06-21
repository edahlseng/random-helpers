"use strict";

function randomArraySubset(array) {
	var arraySubset = array.slice();
	for (var i = array.length - 1; i >= 0; i--) {
		if (randomBoolean()) {
			arraySubset.splice(randomIndex(arraySubset), 1);
		}
	}
	return arraySubset;
}

function randomBoolean() {
	return Math.random() >= 0.5;
}

function randomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

function randomIntegerInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
	randomArraySubset: randomArraySubset,
	randomBoolean: randomBoolean,
	randomIndex: randomIndex,
	randomIntegerInclusive: randomIntegerInclusive,
	randomItem: randomItem
};
