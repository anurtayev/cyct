import xs from 'xstream'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				count: 0,
				title: 'defaultTitle'
			}
		} else {
			return prevState
		}
	})
}

export default actions => {

	const mainReducer$ = actions.buttonClicks$.map(oneMore => prevState => ({
		...prevState,
		count: prevState.count + oneMore
	}))

	return xs.merge(defaultReducer(), mainReducer$);
}
