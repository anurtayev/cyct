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
                },
                metadata: 0
            }
        }
    })
}

export default ({
    name$,
    files$,
    metadata$
}) => {

    const mainReducer$ = name$
        .map(name =>
            prevState => ({
                ...prevState,
                name
            }))

    const filesReducer$ = files$.map(
        files =>
        prevState => ({
            ...prevState,
            files
        }))

    const metadataReducer$ = metadata$.map(
        metadata =>
        prevState => ({
            ...prevState,
            metadata: prevState.metadata + metadata
        }))

    return xs.merge(defaultReducer(), mainReducer$, filesReducer$, metadataReducer$);
}
