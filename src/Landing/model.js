import xs from 'xstream'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				count: -1
			}
		} else {
			return prevState
		}
	})
}

export default actions => {

	const mainReducer$ = actions.buttonClicks$.map(oneMore => prevState => {
    console.log('mainReducer: ' + prevState.count);
		prevState.count += oneMore
    return prevState
	})

	return xs.merge(defaultReducer(), mainReducer$);
}
