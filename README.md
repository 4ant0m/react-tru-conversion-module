# react-tru-conversion-module
### React Tru Conversion Module

This is a Javascript module to [React](https://facebook.github.io/react/) based apps that implement Tru Conversion. It is designed to use [TruConversion](http://truconversion.com/) snippet.

You can easily use custom dataLayer;

## Installation

[npm](https://www.npmjs.com/):

```bash
npm install react-tru-conversion-module --save
```

## Usage

Initializing TruConversion Module:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

...
import TruConversion from 'react-tru-conversion-module'

const truConversionArgs = {
    id: 'tl-jss',
    scriptIdUrl: 'fsadhkjda/dsadsa'
}

TruConversion.initialize(truConversionArgs)
...

const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)

```

## DataLayer

### Custom dataLayer example:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

...
import TruConversion from 'react-tru-conversion-module'

const truConversionArgs = {
    gtmId: 'GTM-000000',
    dataLayer: {
        userId: '001',
        userProject: 'project'
    }
}

TruConversion.initialize(truConversionArgs);
...

const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)

```
|Value|Type|Required|Notes|
|------|-----|-----|-----|
|id| `String`| Yes | id, must be something like `rl-js`.|
|scriptIdUrl| `String`| Yes | Id's url for script, should be something like `dhhgj/fa32`.|
|dataLayer| `Object`| No | Object that contains all of the information that you want to pass to Tru Conversion.|

### Note:

- Disabling javascript in the browser can prevent the correct operation of this library if React is only being rendered on the client side.
