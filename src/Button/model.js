import xs from 'xstream'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				count: 0,
				title: 'defaultTitle'
			}
		} else {
			return {
        count: 'count' in prevState ? prevState.count : 0,
        title: 'title' in prevState ? prevState.title : 'defaultTitle'
      }
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
