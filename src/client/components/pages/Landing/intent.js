import xs from 'xstream'

export default ({
    DOM
}) => ({
    nav$: DOM.select('.Landing.nav1')
        .events('click')
        .map(e => '/admin'),
    name$: DOM.select('.Landing.nameInput')
        .events('input')
        .map(e => e.target.value),
    socket$: xs.merge(
        DOM.select('.Landing.msg1').events('click').map(e => ({
            messageType: 'cyct.msg1',
            message: 'ahem'
        })),
        DOM.select('.Landing.msg2').events('click').map(e => ({
            messageType: 'cyct.msg2',
            message: 'stop noch, podozhdi. podozhdi ne uhodi...'
        }))
    )
})
