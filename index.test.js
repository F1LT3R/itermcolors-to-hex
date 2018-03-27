import test from 'ava'
import itermcolorsToHex from '.'

test('Loads iTerm2 color Github Light plist as hex color object', t => {
	const iTerm2Colors = itermcolorsToHex('./base16-github.light.itermcolors')
	t.deepEqual(iTerm2Colors, {
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
	})
})

test('Loads iTerm2 color Flat Dark plist as hex color object', t => {
	const iTerm2Colors = itermcolorsToHex('./base16-flat.dark.itermcolors')
	t.deepEqual(iTerm2Colors, {
		'Ansi 0 Color': '#2c503e',
		'Ansi 1 Color': '#e73c4c',
		'Ansi 10 Color': '#345e49',
		'Ansi 11 Color': '#7f8d8c',
		'Ansi 12 Color': '#bdc7c3',
		'Ansi 13 Color': '#f5f5f5',
		'Ansi 14 Color': '#be3c64',
		'Ansi 15 Color': '#ecf1f0',
		'Ansi 2 Color': '#2e71cc',
		'Ansi 3 Color': '#f10fc4',
		'Ansi 4 Color': '#34db98',
		'Ansi 5 Color': '#9bb659',
		'Ansi 6 Color': '#1a9cbc',
		'Ansi 7 Color': '#e0e0e0',
		'Ansi 8 Color': '#95a6a5',
		'Ansi 9 Color': '#e6227e',
		'Background Color': '#2c503e',
		'Bold Color': '#e0e0e0',
		'Cursor Color': '#e0e0e0',
		'Cursor Text Color': '#2c503e',
		'Foreground Color': '#e0e0e0',
		'Selected Text Color': '#e0e0e0',
		'Selection Color': '#7f8d8c'
	})
})

test('Throws when file not found', t => {
	const error = t.throws(() => {
		itermcolorsToHex('./beep')
	})
	t.is(error.message, 'ENOENT: no such file or directory, open \'./beep\'')
})

