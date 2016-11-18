import xs from 'xstream'

function defaultReducer() {
    return xs.of(prevState => {
        if (typeof prevState === 'undefined') {
            return {
                topLevelPayload: 'PL',
                msgButton1: {
                    title: 'ronccc'
                },
                msgButton2: {
                    title: 'b#2'
                }
            }
        } else {
            return prevState
        }
    })
}

export default (actions) =>
xs.merge(defaultReducer())
