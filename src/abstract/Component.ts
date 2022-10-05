import { buildCSS, generateId, isObjectEqual } from '../util'
import { Store } from '../store'

interface DefaultProps {
	id?: string
	[key: string]: any
}

export abstract class Component {
	store: Store
	state: any
	constructor(store: Store, state = {}) {
		this.store = store
		this.state = state
	}

	setState(value: any) {
		this.state = {
			...this.state,
			...value,
		}
	}

	setComponentCSS(css) {
		const componentCSS = this.store.get('componentCSS', '')
		if (!componentCSS.includes(css)) {
			this.store.set('componentCSS', componentCSS + css)
		}
	}

	getQuery(key: any) {
		const isArray = typeof key === 'object' && Array.isArray(key)
		if (isArray) {
			return (
				key?.map((k) => ({
					name: k,
					value: this.getQuery(k),
				})) ?? []
			)
		}

		const query = this.store.get('query', '')
		return {
			name: key,
			value: query?.[key] ?? '',
		}
	}

	getClassname(style) {
		const styles = this.store.get('styles', '')
		for (const key in styles) {
			if (isObjectEqual(styles[key], style)) {
				return key
			}
		}
	}

	// used for mediaqueries
	getClassnameV2(style, maxWidth) {
		const mediaQuery = this.store.get('mediaquery', {})

		if (!mediaQuery?.[maxWidth]) {
			return null
		}

		for (const key in mediaQuery?.[maxWidth]) {
			if (isObjectEqual(mediaQuery?.[maxWidth]?.[key], style)) {
				return key
			}
		}
	}

	setStyle(className, style) {
		const styles = this.store.get('styles', '')
		if (!styles[className] && !this.getClassname(style)) {
			styles[className] = style
			this.store.set('styles', styles)
		}
	}

	setStyleV2(className, style) {
		const styles = this.store.get('styles', '')
		styles[className] = style
		this.store.set('styles', styles)
	}

	// Used for mediaqueries
	setStyleV3(className, style, maxWidth) {
		const mediaStyle = this.store.get('mediaquery', {})
		const styles = mediaStyle?.[maxWidth] ?? {}
		if (!styles[className] && !this.getClassnameV2(style, maxWidth)) {
			styles[className] = style

			mediaStyle[maxWidth] = {
				...(mediaStyle?.[maxWidth] ?? {}),
				...styles,
			}
			this.store.set('mediaquery', mediaStyle)
		}
	}

	buildClassName(styles = {}, className = generateId(6)) {
		const classNameExists = this.getClassname(styles)
		this.setStyle(className, styles)
		const _className = classNameExists ?? className
		return _className
	}

	buildClassNameV2(styles = {}) {
		let classList = []
		for (const key in styles) {
			const value = styles[key]
			const newStyle = { [key]: value }
			const newClassName = generateId(6)
			const classNameExists = this.getClassname(newStyle)
			this.setStyle(newClassName, newStyle)
			if (classNameExists) {
				classList.push(classNameExists)
			} else {
				classList.push(newClassName)
			}
		}
		return classList.join(' ')
	}

	buildClassNameV3(styles = {}, className = generateId(6)) {
		this.setStyleV2(className, styles)
		return className
	}

	buildMediaQuery(maxWidth: string, styles = {}, className = generateId(6)) {
		const classNameExists = this.getClassnameV2(styles, maxWidth)

		if (classNameExists) {
			return classNameExists
		}
		this.setStyleV3(className, styles, maxWidth)
		return className
	}

	buildMediaQueryV2(maxWidth: string, styles = {}) {
		let classList = []
		for (const key in styles) {
			const value = styles[key]
			const newStyle = { [key]: value }
			const newClassName = generateId(6)
			const classNameExists = this.getClassnameV2(newStyle, maxWidth)
			this.setStyleV3(newClassName, newStyle, maxWidth)
			if (classNameExists) {
				classList.push(classNameExists)
			} else {
				classList.push(newClassName)
			}
		}
		return classList.join(' ')
	}

	constructCSS() {
		const styles = this.store.get('styles', '')
		const mediaqueryStyles = this.store.get('mediaquery', '')
		let str = ''
		Object.entries(styles).forEach(([key, value]) => {
			str += buildCSS({ className: key, styles: value })
		})

		for (const key in mediaqueryStyles) {
			const value = mediaqueryStyles[key]
			str += `@media only screen and (max-width: ${key}px) {`
			Object.entries(value).forEach(([k, v]) => {
				str += buildCSS({ className: k, styles: v })
			})

			str += '}'
		}
		return str
	}

	buildFieldsCSS() {
		const form = this.store.get('form', {})
		const globalKey = this.store.get('globalKey', '')

		const { fieldStyles } = form ?? {}
		let fieldStylesStr = ''
		Object.entries(fieldStyles).forEach(([key, value]) => {
			const css = buildCSS({
				className: `${key}-${globalKey}`,
				styles: value,
			})

			if (!fieldStylesStr.includes(css)) {
				fieldStylesStr += css
			}
		})
		return fieldStylesStr
	}

	setScript(script = '') {
		let scripts = this.store.get('scripts', '')
		if (!scripts.includes(script)) {
			scripts += `;(()=>{${script}})()`
			this.store.set('scripts', scripts)
		}
	}

	setHeader(header = '') {
		let headers = this.store.get('headers', '')
		if (!headers.includes(header)) {
			headers += header
			this.store.set('headers', headers)
		}
	}

	setCommonScript(script = '') {
		let commonScripts = this.store.get('commonScripts', '')
		if (!commonScripts.includes(script)) {
			commonScripts += script
			this.store.set('commonScripts', commonScripts)
		}
	}

	makeId(id = generateId(6)) {
		const globalKey = this.store.get('globalKey', '')
		return `${id}-${globalKey}`
	}

	abstract render(props?: DefaultProps, ...children): string
}
