Random Helpers
==============

Random Helpers provides random helper functions.

Installation
------------
```bash
npm install random-helpers
```

API Usage
---------

### Example:

```js
var randomHelpers = require("random-helpers");

console.log('Coin flip:');
if (randomHelpers.randomBoolean()) console.log('Heads');
else console.log('Tails');
```

### Available functions

**randomHelpers.randomArraySubset(array)**

Returns a subset of `array` consisting of a random combination of sub-elements.

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to generate a subset from|

**randomHelpers.randomBoolean()**

Generates a random boolean.

Parameters: None

**randomHelpers.randomIndex(array)**

Generates a random integer in the range [0, `array.length`).

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to generate an index from|

**randomHelpers.randomIntegerInclusive(min, max)**

Generates a random integer in the range [`min`, `max`].

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|min|integer|The minimum integer value to generate|
|max|integer|The maximum integer value to generate|

**randomHelpers.randomItem(array)**

Returns a random item from `array`.

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|array|array|The array to return an item from|
