import xs from 'xstream'

const title = 'navigatte'

function defaultReducer() {
    return xs.of(prevState => {
        if (typeof prevState === 'undefined') {
            return {
                name: '',
                nav1: {
                    title
                }
            }
        } else {
            return {
                name: 'name' in prevState ? prevState.name : '',
                nav1: {
                    title
                }
            }
        }
    })
}

export default ({
    name$
}) => {

    const mainReducer$ = name$.map(name =>
        prevState => ({
            ...prevState,
            name
        }))

    return xs.merge(defaultReducer(), mainReducer$);
}
