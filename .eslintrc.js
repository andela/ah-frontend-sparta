module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"jest": true
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
		"camelcase":"off",
		"no-param-reassign":"off",
		"max-len": [1, 80, 2],
		"react/jsx-uses-react":1,
		"react/react-in-jsx-scope": 1,
		"jest/no-disabled-tests": "error",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		"import/prefer-default-export": "off",
		"import/no-named-as-default":"off",
	},
	"parser": "babel-eslint",
};
