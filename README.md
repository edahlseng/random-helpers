Random Helpers
==============

Random Helpers provides random helper functions.

Installation
------------
```bash
npm install random-helpers
```

Example
-------

```javascript
var randomHelpers = require("random-helpers");

console.log('Coin flip:');
if (randomHelpers.randomBoolean()) console.log('Heads');
else console.log('Tails');
```

Usage
-----

### randomHelpers.randomArraySubset(array)

Returns a subset of `array` consisting of a random combination of sub-elements.

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to generate a subset from|

### randomHelpers.randomBoolean()

Generates a random boolean.

**Parameters:**
None

### randomHelpers.randomIndex(array)

Generates a random integer in the range [0, `array.length`).

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to generate an index from|

### randomHelpers.randomIntegerInclusive(min, max)

Generates a random integer in the range [`min`, `max`].

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|min|integer|The minimum integer value to generate|
|max|integer|The maximum integer value to generate|

### randomHelpers.randomItem(array)

Returns a random item from `array`.

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to return an item from|

### randomHelpers.randomNumber(min, max)

Returns a random number in the range [`min`, `max`).

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|min|number|The minimum number value to generate|
|max|number|The maximum number value to generate|

### randomHelpers.randomVariable()

Returns a random variable, of type `boolean`, `null`, `undefined`, `number`, `string`, or `object`. If the variable is of type `object`, it will either be a `function`, `array`, or plain object.

**Parameters:**
None

### randomHelpers.randomVariableExcluding(typesToExclude)

Returns a random variable as in `randomHelpers.randomVariable`, but will not return a variable with a type specified in `typesToExclude`.

**Parameters:**

|Parameter|Type|Description|
|---------|----|-----------|
|typesToExclude|string or array of strings|The data types that the random variable should **not** be. Valid types include `boolean`, `null`, `undefined`, `number`, `string`, `object`, `function`, `array`, and `plainObject`. If `typesToExclude` includes `object`, then `function`, `array`, and `plainObject` are all implicitly excluded. If `typesToExclude` is undefined, then no data types will be excluded.|
