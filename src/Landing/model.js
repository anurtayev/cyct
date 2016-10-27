import xs from 'xstream'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				topLevelPayload: 'PL',
        button2: {
          title: 'fuck you!'
        }
			}
		} else {
			return prevState
		}
	})
}

export default (actions, children) =>
xs.merge(defaultReducer(), children.button, children.button2);
