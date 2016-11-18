import xs from 'xstream'
import Landing from './../components/pages/Landing'
import Admin from './../components/pages/Admin'

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
	}))

	return {
		DOM: safeProp('DOM', page$),
		router: safeProp('route', page$),
		console: safeProp('console', page$),
    Socket: safeProp('Socket', page$),
		onion: safeProp('onion', page$)
	}
}
