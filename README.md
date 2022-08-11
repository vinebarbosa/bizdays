# bizdays-js [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Biszdays is a simple library for working with business days.

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using one of the commands below

If you are using [npm](https://www.npmjs.com/):

```bash
npm install bizdays-js
```

If you are using [yarn](https://yarnpkg.com/):

```bash
yarn add bizdays-js
```

## Usage
```javascript
import bizdays from 'bizdays-js';

const today = new Date();

bizdays.setLocale('pt-BR');

console.log(bizdays.isBizday(today)) // shows true if today is a business day

console.log(bizdays.isHoliday(today)) // shows true if today is a holiday

console.log(bizdays.isWeekend(today)) // shows true if today is a weekend

const nextBusinessDay = bizdays.following(today) // get the next business day
console.log(nextBusinessDay)

const previousBusinessDay = bizdays.previous(today) // get the previous business day
console.log(previousBusinessDay)
```

<br/>

## Library Supported Locales

| Locale | Description |
|--------|-------------|
| pt-BR | Brazilian Portuguese |

<br/>
Made with ❤ by Vine
