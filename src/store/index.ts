import { generateId } from '../util'

export class Store {
	private store: any = {}
	constructor(initialValue) {
		this.store = { globalKey: generateId(6), ...initialValue }
	}
	get(key: string, defaultValue: any = null) {
		return this.store?.[key] ?? defaultValue
	}
	set(key: string, value: any) {
		this.store[key] = value
	}

	reset() {
		this.store = {}
	}

	all() {
		return this.store
	}
}
