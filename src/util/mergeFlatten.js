import xs from 'xstream'
import {
	map,
	propOr
} from 'ramda'

function isStream(stream) {
	return typeof stream.addListener === 'function' &&
		typeof stream.fold === 'function'
}

const propOrNever = propOr(xs.never())

export default (key, children) => {
	const streams = map(child => isStream(child) ?
		child.map(propOrNever(key)).flatten() :
		propOrNever(key, child), children
	)
	return xs.merge(...streams)
}
