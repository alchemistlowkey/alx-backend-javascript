# ES6 Promises
![es6Promise](https://github.com/alchemistlowkey/alx-backend-javascript/assets/46524038/8853f1dd-8a38-48bb-83e5-b8b4cf90562a)

## Resources
### Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**
- Promises (how, why, and what)
- How to use the `then, resolve, catch` methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an `async` function

## Requirements
General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi, vim, emacs, Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the `Jest` Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
nodejs -v
```

```
npm -v
```

### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

## Configuration files
Add the files below to your project directory

### `package.json`
<details>
  <summary>Click to show/hide file contents</summary>

```js
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```  
</details>

### `babel.config.js`
<details>
  <summary>Click to show/hide file contents</summary>

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```  
</details>

### `utils.js`
Use when you get to tasks requiring uploadPhoto and createUser.
<details>
  <summary>Click to show/hide file contents</summary>

```js
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```
</details>

### `.eslintrc.js`
<details>
  <summary>Click to show/hide file contents</summary>

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
</details>

Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

### Response Data Format
**uploadPhoto** returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```

**createUser** returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```
