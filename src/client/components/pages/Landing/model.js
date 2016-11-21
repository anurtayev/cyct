import xs from 'xstream'

function defaultReducer() {
    return xs.of(prevState => {
        if (typeof prevState === 'undefined') {
            return {
                name: ''
            }
        } else {
            return {
              name: 'name' in prevState ? prevState.name : '',
            }
        }
    })
}

export default ({
    name$
}) => {

    const mainReducer$ = name$.map(name => prevState => ({
      name
    }))

    return xs.merge(defaultReducer(), mainReducer$);
}
