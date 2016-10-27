function main(sources) {
	const match$ = sources.router.define({
		'/': MainMenu,
		'/documents': Documents,
		'/pictures': Pictures,
		'/movies': Movies,
		'/music': Music,
	})

	const page$ = match$.map(({
		path,
		value
	}) => {
		return value({...sources,
			router: sources.router.path(path)
		})
	}).debug()

	return {
		DOM: mergeFlatten('DOM', [page$]),
		router: mergeFlatten('route$', [page$])
	}
}
