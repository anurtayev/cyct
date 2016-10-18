import {
	forEach
} from 'ramda'

export default (componentName, sources, ...sourcesNames) => {
	forEach(n => {
		if (!sources[n]) {
			throw new Error(`${componentName} must have ${n} specified`)
		}
	}, sourcesNames)
}
