# iTermColors-to-Hex

> 🎨  Convert sRGB colors from an .itermcolors plist into a hex color object.

[![Build Status](https://travis-ci.org/F1LT3R/itermcolors-to-hex.svg?branch=master)](https://travis-ci.org/F1LT3R/itermcolors-to-hex)
[![Coverage Status](https://coveralls.io/repos/github/F1LT3R/itermcolors-to-hex/badge.svg?branch=master)](https://coveralls.io/github/F1LT3R/itermcolors-to-hex?branch=master)
[![NPM Version](https://img.shields.io/npm/v/itermcolors-to-hex.svg)](https://www.npmjs.com/package/itermcolors-to-hex)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)


Note: You can find iTerm2 color schemes here: [https://github.com/martinlindhe/base16-iterm2](https://github.com/martinlindhe/base16-iterm2)

## Install

```
$ yarn add itermcolors-to-hex
```

## Usage

```js
const itermcolorsToHex = require('itermcolors-to-hex')
const colors = itermcolorsToHex()
```

Output:

```js
{
    'Ansi 0 Color': '#ffffff',
    'Ansi 1 Color': '#ed436a',
    'Ansi 10 Color': '#f5f5f5',
    'Ansi 11 Color': '#c8fac8',
    'Ansi 12 Color': '#e8e8e8',
    'Ansi 13 Color': '#ffffff',
    'Ansi 14 Color': '#333333',
    'Ansi 15 Color': '#ffffff',
    'Ansi 2 Color': '#189136',
    'Ansi 3 Color': '#79a35d',
    'Ansi 4 Color': '#79a35d',
    'Ansi 5 Color': '#a75d1d',
    'Ansi 6 Color': '#189136',
    'Ansi 7 Color': '#333333',
    'Ansi 8 Color': '#969698',
    'Ansi 9 Color': '#00b386',
    'Background Color': '#ffffff',
    'Bold Color': '#c8fac8',
    'Cursor Color': '#c8fac8',
    'Cursor Text Color': '#ffffff',
    'Foreground Color': '#c8fac8',
    'Selected Text Color': '#c8fac8',
    'Selection Color': '#333333'
}
```
