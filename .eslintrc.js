module.exports = {

    parser: "@typescript-eslint/parser", // Specifies the ESLint parser

    parserOptions: {

        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features

        sourceType: "module", // Allows for the use of imports
        
    },
    env: {
        node: true,
        jest: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],

    rules: {

        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "comma-spacing": "error",
        "func-style": ["error", "declaration", {
            "allowArrowFunctions": true
        }],
        "implicit-arrow-linebreak": ["error", "beside"],
        "key-spacing": ["error", {
            "beforeColon": false
        }],
        "linebreak-style": 0,
        "max-depth": ["error", 4],
        "max-nested-callbacks": ["error", 3],
        "no-lonely-if": "error",
        "no-tabs": "error",
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "space-infix-ops": "error",
        "brace-style": "error",
        "no-undef": "error",
        "no-unused-vars": "warn",
        "no-unused-expressions": "error"

    }

};