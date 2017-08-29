"use strict";

function randomArraySubset(array) {
	const arraySubset = array.slice();
	for (let i = array.length - 1; i >= 0; i--) {
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

function randomNumber() {
	return Math.random() * (max - min) + min;
}

function randomVariable() {
	return randomVariableExcluding();
}

function randomVariableExcluding(typesToExclude) {
	const dataTypes = ["boolean", "null", "undefined", "number", "string", "function", "array", "plainObject"];

	if (!typesToExclude) {
		typesToExclude = [];
	} else if (typeof typesToExclude == "string") {
		typesToExclude = [typesToExclude];
	} else {
		typesToExclude = typesToExclude.slice();
	}

	if (typesToExclude.indexOf("object") > -1) {
		typesToExclude.push("function");
		typesToExclude.push("array");
		typesToExclude.push("plainObject");
	}

	for (let i = typesToExclude.length - 1; i >= 0; i--) {
		const index = dataTypes.indexOf(typesToExclude[i]);
		if (index > -1) dataTypes.splice(index, 1);
	}

	const dataType = randomItem(dataTypes);
	let randomVariable;
	switch (dataType) {
		case "boolean":
			randomVariable = randomBoolean();
			break;
		case "null":
			randomVariable = null;
			break;
		case "undefined":
			randomVariable = undefined;
			break;
		case "number":
			randomVariable = randomNumber(-1000000, 1000000);
			break;
		case "string":
			randomVariable = "";
			break;
		case "function":
			randomVariable = function () {};
			break;
		case "array":
			randomVariable = [];
			break;
		case "plainObject":
			randomVariable = {};
			break;
	}
	return randomVariable;
}

module.exports = {
	randomArraySubset: randomArraySubset,
	randomBoolean: randomBoolean,
	randomIndex: randomIndex,
	randomIntegerInclusive: randomIntegerInclusive,
	randomItem: randomItem,
	randomNumber: randomNumber,
	randomVariable: randomVariable,
	randomVariableExcluding: randomVariableExcluding
};
