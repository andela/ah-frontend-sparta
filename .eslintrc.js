module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "airbnb"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": ["jest", "react"],
	"rules": {
		"max-len": [1, 80, 2],
		"react/jsx-uses-react":1,
		"react/react-in-jsx-scope": 1,
		"jest/no-disabled-tests": "error",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error"
	},
	"parser": "babel-eslint",
};
