import { MakeTagInterface } from '../interface'
import { ALLOWED_ATTRIBUTES } from '../rendering.constant'

export const toCSS = (styles) => {
	let cssString = '{'
	for (const key in styles) {
		cssString += `${key}:${styles[key]};`
	}
	cssString += '}'
	return cssString
}

export const buildCSS = ({ className, styles }) => {
	let str = ''
	const { pseudoStyles, ...restStyles } = styles ?? {}

	if (className && restStyles) {
		str += `.${className} ${toCSS(restStyles)}`
	}

	if (!pseudoStyles) {
		return str
	}

	Object.entries(pseudoStyles).forEach(([key, value]) => {
		str += `.${className}:${key} ${toCSS(value)}`
	})

	return str
}

export const buildAttributes = (attributes, allowedAttributes = null) => {
	let attributesStr = ''
	Object.entries(attributes).forEach(([key, value]) => {
		if (allowedAttributes && !allowedAttributes.includes(key)) return
		if (typeof value === 'boolean') {
			if (value) {
				attributesStr += ` ${key}`
			}
		} else {
			attributesStr += ` ${key}="${value}"`
		}
	})

	return attributesStr
}

export const makeTag = ({
	tag = 'div',
	children = [],
	attributes = {},
	isSelfClosing = false,
}: MakeTagInterface) => {
	const attributesStr = buildAttributes(attributes, ALLOWED_ATTRIBUTES[tag])
	if (isSelfClosing) return `<${tag} ${attributesStr}/>`
	let childrenStr = children.join('').trim()
	return `<${tag} ${attributesStr}>${childrenStr}</${tag}>`
}

export const clean = (str = '') => {
	if (str === '') return ''
	return str.replace(/(<([^>]+)>)/gi, '')
}

export const oneLine = (str = '') =>
	str
		.replace(/^\s+|\s+$/gm, '')
		.split('\n')
		.join('')

export const generateId = (maxLength = 10) => {
	let text = ''
	const possible = 'abcdefghijklmnopqrstuvwxyz'

	for (let i = 0; i < maxLength; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}

export const isObjectEqual = (object1: any, object2: any) =>
	JSON.stringify(object1) === JSON.stringify(object2)
