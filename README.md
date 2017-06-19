# eslint-plugin-metarhia-chaining

Check chaining syntax for api.module.method1().method2() pattern

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-metarhia-chaining`:

```
$ npm install eslint-plugin-metarhia-chaining --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-metarhia-chaining` globally.

## Usage

Add `metarhia-chaining` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "metarhia-chaining"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "metarhia-chaining/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





