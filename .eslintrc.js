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
		"no-nested-ternary": "off",
		"no-param-reassign":"off",
		"react/no-unused-state":"off",
		" no-restricted-globals":"off",
		"react/prop-types":"off",
		"no-unused-vars":"off",
		"no-restricted-globals":"off",
		"max-len": [1, 80, 2],
		"no- param-reassign":"off",
		"react/destructuring-assignment":"off",
		"react/jsx-uses-react":1,
		"react/react-in-jsx-scope": 1,
		"jest/no-disabled-tests": "error",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		"import/prefer-default-export": "off",
		"import/no-named-as-default":"off",
		"react/prefer-stateless-function": "off",
		"jest/valid-expect": "error"
	},
	"parser": "babel-eslint",
};
