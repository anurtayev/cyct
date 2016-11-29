import xs from 'xstream'

export default ({
    DOM,
    Socket
}) => ({
    name$: DOM.select('.Landing.nameInput')
        .events('input')
        .map(e => e.target.value),
    socket$: xs.merge(
        DOM.select('.Landing.msg1').events('click').map(e => ({
            messageType: 'cyct.msg1',
            message: 'sc work!'
        })),
        DOM.select('.Landing.msg2').events('click').map(e => ({
            messageType: 'cyct.msg2',
            message: 'do it ols'
        }))
    ),
    files$: Socket.get('filesEvent').map(data => data.file).debug(),
    metadata$: Socket.get('metadataEvent').map(data => data.size).debug()
})
