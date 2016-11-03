import xs from 'xstream'
import Landing from './../Landing'
import Admin from './../Admin'

import {
	propOr
} from 'ramda'

const safeProp = (key, page$) =>
	page$
	.map(propOr(xs.never(), key))
	.flatten()

export default sources => {

	const page$ = sources.router.define({
		'/': Landing,
		'/admin': Admin
	}).map(({
		path,
		value
	}) => value({
		...sources,
		router: sources.router.path(path)
	})).debug()

	return {
		DOM: safeProp('DOM', page$),
		router: safeProp('route', page$),
		console: safeProp('console', page$),
		onion: safeProp('onion', page$)
	}
}
