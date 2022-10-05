export interface GlobalAttributes {
	class?: string
	id?: string
	style?: string
	translate?: string
	contenteditable?: string
	hidden?: boolean
	draggable?: boolean
	spellcheck?: boolean
	onclick?: string
	on?: string
}

// These Element only has Global Attributes
/*
	div
	h1, h2, h3, h4, h5, h6
	p
	span
	section
	hr
	table
	tbody
	td
	tr
*/

export interface InputAttributes extends GlobalAttributes {
	accept?: string
	alt?: string
	autofocus?: boolean
	autocomplete?: boolean | string
	height?: string
	width?: string
	max?: number
	maxlength?: number
	min?: number
	pattern?: string
	readonly?: string
	src?: string
	type?: string
	value?: string
	placeholder?: string
	checked?: boolean
	disabled?: boolean
	required?: boolean
	name?: string
	step?: string
	onmousemove?: any
}

export interface TextareaAttributes extends GlobalAttributes {
	autofocus?: boolean
	cols?: number
	rows?: number
	maxlength?: number
	placeholder?: string
	readonly?: boolean
	required?: boolean
	value?: string
	name?: string
	wrap?: string
}

export interface AAttributes extends GlobalAttributes {
	href?: string
	download?: string
	hreflang?: string
	media?: string
	ping?: string
	referrerpolicy?: string
	rel?: string
	target?: string
	type?: string
}

export interface ImgAttributes extends GlobalAttributes {
	src?: string
	alt?: string
	height?: string
	width?: string
	crossorigin?: string
	ismap?: string
	loading?: string
	longdesc?: string
	referrerpolicy?: string
	sizes?: string
	srcset?: string
	usemap?: string
}

export interface ButtonAttributes extends GlobalAttributes {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean
	formtarget?: string
	name?: string
	type?: string
	value?: string
}

export interface FormAttributes extends GlobalAttributes {
	'accept-charset'?: string
	action?: string
	'action-xhr'?: string
	autocomplete?: string
	enctype?: string
	method?: string
	name?: string
	novalidate?: boolean
	rel?: string
	target?: string
}

export interface LabelAttributes extends GlobalAttributes {
	for?: string
	form?: string
	title?: string
}

export interface SelectAttributes extends GlobalAttributes {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
}

export interface OptionAttributes extends GlobalAttributes {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string
}

export interface FieldsetInterface extends GlobalAttributes {
	disabled?: boolean
	form?: string
	name?: string
}

export interface IFrameAttributes extends GlobalAttributes {
	allow?: any
	allowfullscreen?: boolean
	allowpaymentrequest?: boolean
	height?: string
	loading?: string
	name?: string
	referrerpolicy?: string
	sandbox?: string
	src?: string
	width?: string
}

export interface VideoAttributes extends GlobalAttributes {
	autoplay?: string
	controls?: string
	height?: string
	loop?: string
	muted?: string
	poster?: string
	preload?: string
	src?: string
	width?: string
}

export interface OutputAttributes extends GlobalAttributes {
	for?: string
	form?: string
	name?: string
}

export interface ThAttributes extends GlobalAttributes {
	abbr?: string
	colspan?: number
	headers?: string
	rowspan?: number
	scope?: string
}
export interface TheadAttributes extends GlobalAttributes {}
export interface TrAttributes extends GlobalAttributes {}

export interface CanvasInterface extends GlobalAttributes {
	height?: string
	width?: string
}

// ! AMP Element

export interface AMPImgAttributes extends GlobalAttributes {
	alt: string
	src: string
	width: string
	height: string
	layout?: string
	fallback?: boolean
}

export interface MakeTagInterface {
	tag: string
	children?: string[]
	attributes?: GlobalAttributes
	isSelfClosing?: boolean
}
