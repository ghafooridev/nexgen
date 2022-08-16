module.exports = {
	linters: {
		"**/*.+(js|jsx|tsx|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)": [
			"eslint --fix",
			"prettier --write",
		],
	},
}
