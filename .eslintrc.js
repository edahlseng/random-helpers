module.exports = {
	"env": {
		"es6": true,
	},
	"extends": "eslint:recommended",
	"parserOptions": {
	},
	"rules": {
		// Best Practices
		// ---------------------------------------------------------------------

		"curly": ["warn", "multi-line"],
		"prefer-promise-reject-errors": "error",

		// Strict Mode
		// ---------------------------------------------------------------------

		"strict": ["error", "global"],

		// Variables
		// ---------------------------------------------------------------------

		"no-undef": "off",

		// Node.js and CommonJS
		// ---------------------------------------------------------------------

		"global-require": "error",

		// Stylistic Issues
		// ---------------------------------------------------------------------

		"brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
		"indent": ["error", "tab", { "SwitchCase": 1, "ObjectExpression": "first" }],
		"key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		"keyword-spacing": ["warn", { "before": true, "after": true }],
		"linebreak-style": ["error", "unix"],
		"no-trailing-spaces": "warn",
		"padded-blocks": ["warn", "never"],
		"quotes": ["error", "double", "avoid-escape"],
		"semi": ["error", "always"],
		"space-before-blocks": ["warn", "always"],
		"space-before-function-paren": ["warn", {
				"anonymous": "always",
				"named": "never",
				"asyncArrow": "ignore"
			}],
		"space-infix-ops": "warn",
		"space-unary-ops": ["warn", { "words": true, "nonwords": false}],
		"spaced-comment": ["error", "always"],

		// ECMAScript 6
		// ---------------------------------------------------------------------

		"no-var": "error",
		"prefer-const": "error",
	}
};
