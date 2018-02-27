# Digit Convertor
[![Build Status](https://travis-ci.org/MetaiR/persian-digit-tools.svg?branch=master)](https://travis-ci.org/MetaiR/persian-digit-tools)
[![Coverage Status](https://coveralls.io/repos/github/MetaiR/persian-digit-tools/badge.svg?branch=master)](https://coveralls.io/github/MetaiR/persian-digit-tools?branch=master)

a lightweight library for projects that allow you to parse the digits inside of your strings to persian and vice versa.

## Installation
run one of these commends on your project root:
```sh
npm install persian-digit-tools --save
yarn add persian-digit-tools
bower install persian-digit-tools --save
```

## Usage
first, you must import it

### Javascript
```javascript
var convertor = require('persian-digit-tools').DigitConvertor;
```

### Typescript
```typescript
import { DigitConvertor } from 'persian-digit-tools';
```

then you can use it like this:
```typescript
let str = 'hello 123.sda31 this1233is a complex 1';
console.log(convertor.toPersian(str)); // it will print 'hello ۱۲۳.sda۳۱ this۱۲۳۳is a complex ۱'

let str = '۱۲۳۴۵۶ ۳۲۱۳ ۶۴۱۲۳,۲۳۱';
console.log(convertor.toEnglish(str)); // it will print '123456 3213 64123,231'
```

## Test
you can see test inside of test folder and for run tests use this command:

```sh
npm run test
```

## Contribute

feel free to fork and do what ever you want (or send pull requests).

for contribute this project, first clone the project and go to project folder:

```sh
git clone https://github.com/MetaiR/persian-digit-tools.git
cd persian-digit-tools
```

then run:

```sh
npm install
```

after that you ready to go :D