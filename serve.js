const { build } = require('esbuild')
const { shared } = require('./esbuild.config')

let count = 1
build({
	...shared,
	format: 'cjs',
	outfile: './dist/index.cjs.js',
	target: ['esnext', 'node12.22.0'],
	watch: {
		onRebuild(error, result) {
			if (error) console.error('watch build failed:', error)
			else console.log(`rebuilding > ${count}`)
			count++
		},
	},
}).then((result) => {
	console.log('watching...')
})
