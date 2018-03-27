const fs = require('fs')
const plist = require('plist')
const rgbHex = require('rgb-hex')

const load = file => {
	const output = {}
	const colors = plist.parse(fs.readFileSync(file, 'utf8'))

	Reflect.ownKeys(colors).forEach(name => {
		const def = colors[name]

		const r = def['Red Component'] * 255
		const g = def['Green Component'] * 255
		const b = def['Blue Component'] * 255

		const hex = rgbHex(r, g, b)

		output[name] = `#${hex}`
	})

	return output
}

module.exports = load
