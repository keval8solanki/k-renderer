import {
	ButtonAttributes,
	FormAttributes,
	GlobalAttributes,
	ImgAttributes,
	InputAttributes,
	LabelAttributes,
	OptionAttributes,
	SelectAttributes,
	TextareaAttributes,
	FieldsetInterface,
	AAttributes,
	IFrameAttributes,
	VideoAttributes,
	OutputAttributes,
	ThAttributes,
	CanvasInterface,
	AMPImgAttributes,
} from '../interface'

import { makeTag } from '../util'

export const div = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'div', attributes, children })
}

export const p = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'p', attributes, children })
}

export const h1 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h1', attributes, children })
}

export const h2 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h2', attributes, children })
}

export const h3 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h3', attributes, children })
}

export const h4 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h4', children, attributes })
}

export const h5 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h5', children, attributes })
}

export const h6 = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'h6', children, attributes })
}

export const form = (attributes?: FormAttributes, ...children) => {
	return makeTag({ tag: 'form', children, attributes })
}

export const label = (attributes?: LabelAttributes, ...children) => {
	return makeTag({ tag: 'label', children, attributes })
}

export const span = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'span', children, attributes })
}

export const section = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'section', children, attributes })
}

export const button = (attributes?: ButtonAttributes, ...children) => {
	return makeTag({ tag: 'button', children, attributes })
}

export const textarea = (attributes?: TextareaAttributes, ...children) => {
	return makeTag({ tag: 'textarea', children, attributes })
}

export const select = (attributes?: SelectAttributes, ...children) => {
	return makeTag({ tag: 'select', children, attributes })
}

export const option = (attributes?: OptionAttributes, ...children) => {
	return makeTag({ tag: 'option', children, attributes })
}

export const fieldset = (attributes?: FieldsetInterface, ...children) => {
	return makeTag({ tag: 'fieldset', children, attributes })
}

export const a = (attributes?: AAttributes, ...children) => {
	return makeTag({ tag: 'a', children, attributes })
}

export const iframe = (attributes?: IFrameAttributes, ...children) => {
	return makeTag({ tag: 'iframe', children, attributes })
}

export const video = (attributes?: VideoAttributes, ...children) => {
	return makeTag({ tag: 'video', children, attributes })
}

export const output = (attributes?: OutputAttributes, ...children) => {
	return makeTag({ tag: 'output', children, attributes })
}

export const table = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'table', children, attributes })
}

export const tbody = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'tbody', children, attributes })
}

export const tr = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'tr', children, attributes })
}

export const td = (attributes?: GlobalAttributes, ...children) => {
	return makeTag({ tag: 'td', children, attributes })
}

export const th = (attributes?: ThAttributes, ...children) => {
	return makeTag({ tag: 'th', children, attributes })
}

export const canvas = (attributes?: CanvasInterface, ...children) => {
	return makeTag({ tag: 'canvas', children, attributes })
}

// Self Closing tags

export const input = (attributes?: InputAttributes) => {
	return makeTag({ tag: 'input', attributes, isSelfClosing: true })
}

export const img = (attributes?: ImgAttributes) => {
	return makeTag({ tag: 'img', attributes, isSelfClosing: true })
}

export const hr = (attributes?: GlobalAttributes) => {
	return makeTag({ tag: 'hr', attributes, isSelfClosing: true })
}

// !AMP

export const ampImg = (attributes?: AMPImgAttributes) => {
	return makeTag({ tag: 'amp-img', attributes, isSelfClosing: true })
}
