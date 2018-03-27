import test from 'ava'
import itermcolorsToHex from '.'

test('Loads iTerm2 color Github Light plist as hex color object', t => {
	const iTerm2Colors = itermcolorsToHex('./base16-github.light.itermcolors')
	t.deepEqual(iTerm2Colors, {
		'Ansi 0 Color': '#ffffff',
		'Ansi 1 Color': '#ed6a43',
		'Ansi 10 Color': '#f5f5f5',
		'Ansi 11 Color': '#c8c8fa',
		'Ansi 12 Color': '#e8e8e8',
		'Ansi 13 Color': '#ffffff',
		'Ansi 14 Color': '#333333',
		'Ansi 15 Color': '#ffffff',
		'Ansi 2 Color': '#183691',
		'Ansi 3 Color': '#795da3',
		'Ansi 4 Color': '#795da3',
		'Ansi 5 Color': '#a71d5d',
		'Ansi 6 Color': '#183691',
		'Ansi 7 Color': '#333333',
		'Ansi 8 Color': '#969896',
		'Ansi 9 Color': '#0086b3',
		'Background Color': '#ffffff',
		'Bold Color': '#c8c8fa',
		'Cursor Color': '#c8c8fa',
		'Cursor Text Color': '#ffffff',
		'Foreground Color': '#c8c8fa',
		'Selected Text Color': '#c8c8fa',
		'Selection Color': '#333333'
	})
})

test('Loads iTerm2 color Flat 256 plist as hex color object', t => {
	const iTerm2Colors = itermcolorsToHex('./base16-flat-256.itermcolors')
	t.deepEqual(iTerm2Colors, {
		'Ansi 0 Color': '#2c3e50',
		'Ansi 1 Color': '#e74c3c',
		'Ansi 10 Color': '#2ecc71',
		'Ansi 11 Color': '#f1c40f',
		'Ansi 12 Color': '#3498db',
		'Ansi 13 Color': '#9b59b6',
		'Ansi 14 Color': '#1abb9b',
		'Ansi 15 Color': '#ecf0f1',
		'Ansi 2 Color': '#2ecc71',
		'Ansi 3 Color': '#f1c40f',
		'Ansi 4 Color': '#3498db',
		'Ansi 5 Color': '#9b59b6',
		'Ansi 6 Color': '#1abb9b',
		'Ansi 7 Color': '#e0e0e0',
		'Ansi 8 Color': '#95a5a6',
		'Ansi 9 Color': '#e74c3c',
		'Background Color': '#2c3e50',
		'Bold Color': '#e0e0e0',
		'Cursor Color': '#e0e0e0',
		'Cursor Text Color': '#2c3e50',
		'Foreground Color': '#e0e0e0',
		'Selected Text Color': '#e0e0e0',
		'Selection Color': '#7f8c8d'
	})
})

test('Loads iTerm2 color Flat Dark plist as hex color object', t => {
	const iTerm2Colors = itermcolorsToHex('./base16-flat.dark.itermcolors')
	t.deepEqual(iTerm2Colors, {
		'Ansi 0 Color': '#2c3e50',
		'Ansi 1 Color': '#e74c3c',
		'Ansi 10 Color': '#34495e',
		'Ansi 11 Color': '#7f8c8d',
		'Ansi 12 Color': '#bdc3c7',
		'Ansi 13 Color': '#f5f5f5',
		'Ansi 14 Color': '#be643c',
		'Ansi 15 Color': '#ecf0f1',
		'Ansi 2 Color': '#2ecc71',
		'Ansi 3 Color': '#f1c40f',
		'Ansi 4 Color': '#3498db',
		'Ansi 5 Color': '#9b59b6',
		'Ansi 6 Color': '#1abc9c',
		'Ansi 7 Color': '#e0e0e0',
		'Ansi 8 Color': '#95a5a6',
		'Ansi 9 Color': '#e67e22',
		'Background Color': '#2c3e50',
		'Bold Color': '#e0e0e0',
		'Cursor Color': '#e0e0e0',
		'Cursor Text Color': '#2c3e50',
		'Foreground Color': '#e0e0e0',
		'Selected Text Color': '#e0e0e0',
		'Selection Color': '#7f8c8d'
	})
})

test('Throws when file not found', t => {
	const error = t.throws(() => {
		itermcolorsToHex('./beep')
	})
	t.is(error.message, 'ENOENT: no such file or directory, open \'./beep\'')
})

