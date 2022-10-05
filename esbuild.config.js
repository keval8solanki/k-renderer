const { dependencies } = require('./package.json')
const entryFile = 'src/index.ts'
exports.shared = {
	bundle: true,
	entryPoints: [entryFile],
	loader: { '.js': 'jsx', '.png': 'file', '.jpg': 'file', '.jpeg': 'file' },
	external: Object.keys(dependencies),
	minify: true,
	sourcemap: false,
}
