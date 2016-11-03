import xs from 'xstream'

const msg = 'Happy Birthday Alex!'
const adminEmail = 'admin@nurtai.com'

function defaultReducer() {
	return xs.of(prevState => {
		if (typeof prevState === 'undefined') {
			return {
				msg: msg,
        adminEmail: adminEmail,
        clicksCounter: 0
			}
		} else {
			return {
        msg: 'msg' in prevState ? prevState.msg : msg,
        adminEmail: 'adminEmail' in prevState ? prevState.adminEmail : adminEmail,
        clicksCounter: 'clicksCounter' in prevState ? prevState.clicksCounter : 0,
      }
		}
	})
}

export default actions => {

	const mainReducer$ = actions.buttonClicks$.map(oneMore => prevState => ({
		...prevState,
		clicksCounter: prevState.clicksCounter + oneMore
	}))

	return xs.merge(defaultReducer(), mainReducer$);
}