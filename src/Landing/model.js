import xs from 'xstream'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				button: {
          count: 0,
					title: 'Happy Birthday Alex!'
				}
			}
		} else {
			return prevState
		}
	})
}

export default (actions, children) => {

	const mainReducer$ = actions.buttonClicks$.map(oneMore => prevState => ({
		...prevState,
		count: count + oneMore
	}))

	return xs.merge(defaultReducer(), mainReducer$, children.button);
}
