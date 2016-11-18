import xs from 'xstream'

function defaultReducer() {
    return xs.of(prevState => {
        if (typeof prevState === 'undefined') {
            return {
                topLevelPayload: 'PL',
                msg1: {
                    title: 'send message 1'
                },
                msg2: {
                    title: 'message 2 (Tsoi)'
                },
                nav1: {
                    title: 'navigate to Admin'
                }
            }
        } else {
            return prevState
        }
    })
}

export default (actions) =>
xs.merge(defaultReducer())
